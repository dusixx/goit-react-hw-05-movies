import axios from 'axios';
import { isObj, isArray, camelToSnake, normalizeStr } from '../../utils';
import Cache from './cache';

const cache = new Cache();
// let controller;

const data = {
  API_BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  TMDB_BASE_URL: 'https://www.themoviedb.org/movie',
  IMDB_BASE_URL: 'https://www.imdb.com/title',
  API_KEY: '86d04e898c465c8de09e1ea2fc383ab8',
};

//
// TmdbService
//

export default class TmdbService {
  #response;
  #instance;

  constructor() {
    if (this.#instance) return this.#instance;
    this.#instance = this;
  }

  /**
   *
   * @param {*} relPath
   * @param {*} size
   * @returns
   */
  getImageUrl(relPath, size) {
    const sz = isNaN(parseInt(size)) ? 'original' : `w${size}`;
    return `${data.IMAGE_BASE_URL}/${sz}/${relPath}`;
  }

  getTmdbUrl(id) {
    return `${data.TMDB_BASE_URL}/${id}`;
  }

  getImdbUrl(imdbId) {
    return `${data.IMDB_BASE_URL}/${imdbId}`;
  }

  /**
   *
   * @param {*} url
   * @returns
   */
  async fetch(url) {
    // controller = new AbortController();
    // const { signal } = controller;

    try {
      const resp = await axios.get(url /* { signal } */);
      return { ...(this.#response = resp) };
      // error
    } catch (err) {
      this.#response = err;
      throw err;
    }
  }

  /**
   *
   * @param {*} path
   * @param {*} params
   * @returns
   */
  async get(path, params) {
    const url = `${data.API_BASE_URL}/${path}?api_key=${
      data.API_KEY
    }&${new URLSearchParams(namesToSnake(params))}`;

    return await this.fetch(url);
  }

  /**
   *
   * @param {array} ids - массив идентификаторов жанра
   * @returns массив названий жанра для каждого идентификатора
   */
  async getGenres(ids) {
    if (!isArray(ids)) return [];

    if (!cache.get('genres')) {
      const resp = await this.get(`genre/movie/list`);
      cache.set('genres', resp.data.genres);
    }

    return cache
      .get('genres')
      .filter(({ id }) => ids.includes(id))
      .map(({ name }) => name);
  }

  /**
   *
   * @param {*} period
   * @param {*} params
   * @returns
   */
  async getTrendingMovies(period, params) {
    // не кешируем - грузятся страницами
    const { data } = await this.get(
      `trending/movie/${normalizeStr(period)}`,
      params
    );

    return data;
  }

  /**
   *
   * @param {*} id
   * @param {*} params
   * @returns
   */
  async getMovieDetails(id, params) {
    const cached = cache.get(`movie/${id}`);
    if (cached) return cached;

    const { data } = await this.get(`movie/${id}`, params);
    cache.set(`movie/${id}`, data);

    return data;
  }

  async getMovieCredits(id, params) {
    const cached = cache.get(`movie/${id}/credits`);
    if (cached) return cached;

    const { data } = await this.get(`movie/${id}/credits`, params);
    cache.set(`movie/${id}/credits`, data);

    return data;
  }

  // не кешируем - грузятся страницами
  async getMovieReviews(id, params) {
    const { data } = await this.get(`movie/${id}/reviews`, params);
    return data;
  }

  async searchMovies(query, params) {
    const { data } = await this.get(`search/movie`, { query, ...params });
    return data;
  }

  get cache() {
    return cache.data;
  }

  // abort() {
  //   controller.abort();
  // }
}

/**
 *
 * @param {object} obj
 * @returns - копию obj с именами свойств в snake_case
 */
function namesToSnake(obj) {
  return isObj(obj)
    ? Object.entries(obj).reduce((res, [name, val]) => {
        res[camelToSnake(name)] = val;
        return res;
      }, {})
    : {};
}
