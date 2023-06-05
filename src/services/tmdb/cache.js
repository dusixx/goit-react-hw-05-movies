import { setProp, getProp } from 'utils';

export default class Cache {
  #cache = {};

  set(path, value) {
    setProp(this.#cache, path, value);
  }

  get(path) {
    return getProp(this.#cache, path);
  }

  get data() {
    return { ...this.#cache };
  }

  clear() {
    this.#cache = {};
  }
}
