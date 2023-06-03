import { setProp, getProp } from 'utils';

export default class Cache {
  #cache = {};

  set(path, value) {
    // console.log(this.#cache);
    setProp(this.#cache, path, value);
  }

  get(path) {
    return getProp(this.#cache, path);
  }

  clear() {
    this.#cache = {};
  }
}
