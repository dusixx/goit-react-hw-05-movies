import { camelToSnake, isArray, isObj, normalizeStr } from '@common';
import axios from 'axios';
import { Cache } from './cache';

const { VITE_TMDB_API_KEY, VITE_TMDB_API_URL } = import.meta.env;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const TMDB_BASE_URL = 'https://www.themoviedb.org/movie';
const IMDB_BASE_URL = 'https://www.imdb.com/title';

const cache = new Cache();

export class TmdbService {
  #instance;

  constructor() {
    if (this.#instance) {
      return this.#instance;
    }
    this.#instance = this;
  }

  getImageUrl(relPath, size) {
    const sz = isNaN(parseInt(size)) ? 'original' : `w${size}`;
    return `${IMAGE_BASE_URL}/${sz}/${relPath}`;
  }

  getTmdbUrl(id) {
    return `${TMDB_BASE_URL}/${id}`;
  }

  getImdbUrl(imdbId) {
    return `${IMDB_BASE_URL}/${imdbId}`;
  }

  async fetch(url) {
    const resp = await axios.get(url);
    return { ...resp };
  }

  async get(path, params) {
    const url = `${VITE_TMDB_API_URL}/${path}?api_key=${
      VITE_TMDB_API_KEY
    }&${new URLSearchParams(namesToSnake(params))}`;

    return await this.fetch(url);
  }

  /**
   * @param {number[]} genre ids
   * @returns {string[]} genre names
   */
  async getGenres(ids) {
    if (!isArray(ids)) {
      return [];
    }
    if (!cache.get('genres')) {
      const resp = await this.get(`genre/movie/list`);
      cache.set('genres', resp.data.genres);
    }
    return cache
      .get('genres')
      .filter(({ id }) => ids.includes(id))
      .map(({ name }) => name);
  }

  async getTrendingMovies(period, params) {
    // don't cache - they are loaded page by page
    const { data } = await this.get(
      `trending/movie/${normalizeStr(period)}`,
      params
    );

    return data;
  }

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

  // don't cache - they are loaded page by page
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
}

function namesToSnake(obj) {
  return isObj(obj)
    ? Object.entries(obj).reduce((res, [name, val]) => {
        res[camelToSnake(name)] = val;
        return res;
      }, {})
    : {};
}
