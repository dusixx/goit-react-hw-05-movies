export * from './toast';

const toStr = Object.prototype.toString;
const normId = id => `${id}`.replace(/[^$\w]/gi, '').replace(/^\d+/, '');

//
// prove
//

export const isStr = v => typeof v === 'string';
export const isNum = v => !isNaN(v - parseFloat(v));
export const isDef = v => typeof v !== 'undefined';
export const isFunc = v => typeof v === 'function';
export const isInt = v => Number.isInteger(v);
export const isObj = v => toStr.call(v) === '[object Object]';
export const isArray = v => Array.isArray(v);

//
// css
//

export const calcCSSValue = v => (isNum(v) ? `${v}px` : v);

export const parseCSSValue = v => {
  const value = parseFloat(v);
  const unit = String(v).slice(String(value).length) || 'px';
  return { value, unit };
};

//
// string
//

let id = 0;
export const getId = () => `id-${(id++).toString(16)}`;

export const normalizeStr = s => s && String(s).trim().toLocaleLowerCase();

export const cap = v => (isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : '');

export function camelToSnake(str) {
  return normId(str)
    .replace(/(?<=[^A-Z])([A-Z])/g, (_, ch) => `_${ch.toLowerCase()}`)
    .replace(/_+/g, '_');
}

export function truncateNumber(v, fractDigits = 1) {
  if (!isNum(v)) return '';
  let res = String(v);

  // целая часть
  const digits = res.split('.')[0].length;
  const map = { K: 3, M: 6, B: 9, T: 12 };

  Object.entries(map).some(([suffix, power]) => {
    const found = digits >= power + 1;
    if (found) res = `${(v / 10 ** power).toFixed(fractDigits)}${suffix}`;
    return found;
  });

  return res;
}

export function splitIntoTriads(v, splitter = ' ') {
  // !! очень большие числа некорректно конвертит в строку
  const str = String(v).replace(/\s/g, '');

  // числа только в "обычном" формате (не научный и тп)
  if (!/^\d+(\.\d+)?$/.test(str)) return '';

  // разбиваем на триады только целую часть
  const part = str.split('.');
  const headLen = part[0].length % 3;

  part[0] = part[0].replace(
    RegExp(`(${headLen ? `^\\d{${headLen}}|` : ``}\\d{3})(?!$)`, `g`),
    `$1${splitter}`
  );

  return part.join('.');
}

//
// object
//

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
