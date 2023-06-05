import axios from 'axios';
import { isObj, isArray, camelToSnake } from '../../utils';
import Cache from './cache';

const controller = new AbortController();
const cache = new Cache();

const data = {
  API_BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
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
  buildImageUrl(relPath, size) {
    const sz = isNaN(parseInt(size)) ? 'original' : `w${size}`;
    return `${data.IMAGE_BASE_URL}/${sz}/${relPath}`;
  }

  /**
   *
   * @param {*} url
   * @returns
   */
  async fetch(url) {
    const { signal } = controller;

    try {
      const resp = await axios.get(url, { signal });
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
    // сложнее кешировать - зависит от period (может быть несколько страниц)
    const resp = await this.get(`trending/movie/${period}`);
    return resp.data.results;
  }

  /**
   *
   * @param {*} params
   * @returns
   */
  async getDayTrendingMovies(params) {
    const cached = cache.get('trends/day');
    if (cached) return cached;

    const data = await this.getTrendingMovies('day', params);
    cache.set('trends/day', data);

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

  // TODO: загружает постранично - учесть
  // Сохранять в movie/id/reviews = {page1: [], page2: [], ...}
  async getMovieReviews(id, params) {
    const cached = cache.get(`movie/${id}/reviews`);
    if (cached) return cached;

    const { data } = await this.get(`movie/${id}/reviews`, params);
    cache.set(`movie/${id}/reviews`, data);

    return data;
  }

  get cache() {
    return cache.data;
  }

  abort() {
    controller.abort();
  }
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
