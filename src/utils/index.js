export * from './toast';

const toStr = Object.prototype.toString;
const normId = id => `${id}`.replace(/[^$\w]/gi, '').replace(/^\d+/, '');

// prove

export const isStr = v => typeof v === 'string';
export const isNum = v => !isNaN(v - parseFloat(v));
export const isDef = v => typeof v !== 'undefined';
export const isFunc = v => typeof v === 'function';
export const isInt = v => Number.isInteger(v);
export const isObj = v => toStr.call(v) === '[object Object]';
export const isArray = v => Array.isArray(v);

// css

export const calcCSSValue = v => (isNum(v) ? `${v}px` : v);

export const parseCSSValue = v => {
  const value = parseFloat(v);
  const unit = String(v).slice(String(value).length) || 'px';
  return { value, unit };
};

// string

let id = 0;
export const getId = () => `id-${(id++).toString(16)}`;

export const cap = v => (isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : '');

export function camelToSnake(str) {
  return normId(str)
    .replace(/(?<=[^A-Z])([A-Z])/g, (_, ch) => `_${ch.toLowerCase()}`)
    .replace(/_+/g, '_');
}

// object

export function setProp(obj, path, value, splitter = '/') {
  if (typeof obj !== 'object') return;

  return String(path)
    .split(splitter)
    .reduce((ref, key, idx, arr) => {
      if (idx === arr.length - 1) ref[key] = value;
      // если (промежуточного) свойства не существует -
      // ставим объект
      return ref[key] || (ref[key] = {});
    }, obj);
}

export function getProp(obj, path, splitter = '/') {
  try {
    return String(path)
      .split(splitter)
      .reduce((ref, key) => ref[key], obj);
  } catch {}
}
