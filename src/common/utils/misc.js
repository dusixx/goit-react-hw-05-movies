const toStr = Object.prototype.toString;
const normId = id => `${id}`.replace(/[^$\w]/gi, '').replace(/^\d+/, '');

const NEW_TAB = `target='_blank', rel='noopener noreferrer'`;
const URL_RE = new RegExp(
  [
    `(http[s]?:\\/\\/(www\\.)?|`,
    `ftp:\\/\\/(www\\.)?|www\\.){1}`,
    `([0-9A-Za-z-\\.@:%_+~#=]+)+`,
    `((\\.[a-zA-Z]{2,3})+)`,
    `(/(.)*)?(\\?(.)*)?`,
  ].join(''),
  `gi`
);

export const isNum = v => !isNaN(v - parseFloat(v));
export const isDef = v => typeof v !== 'undefined';
export const isFunc = v => typeof v === 'function';
export const isStr = v => typeof v === 'string';
export const isInt = v => Number.isInteger(v);
export const isObj = v => toStr.call(v) === '[object Object]';
export const isArray = v => Array.isArray(v);

export const calcCSSValue = v => (isNum(v) ? `${v}px` : v);

export const parseCSSValue = v => {
  const value = parseFloat(v);
  const unit = String(v).slice(String(value).length) || 'px';
  return { value, unit };
};

export const getIdGenerator = initial => {
  if (!isNum(initial)) initial = 0;
  return () => `${(initial++).toString(24)}`;
};

export const normalizeStr = s => s && String(s).trim().toLocaleLowerCase();

export const cap = v => (isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : '');

export function camelToSnake(str) {
  return normId(str)
    .replace(/(?<=[^A-Z])([A-Z])/g, (_, ch) => `_${ch.toLowerCase()}`)
    .replace(/_+/g, '_');
}

export function shortenNum(v, fractDigits = 2) {
  if (!isNum(v)) return '';
  let res = String(v);
  // integer part
  const digits = res.split('.')[0].length;
  const map = { K: 3, M: 6, B: 9, T: 12 };

  Object.entries(map).some(([suffix, power]) => {
    const found = digits >= power + 1;
    if (found) res = `${(v / 10 ** power).toFixed(fractDigits)}${suffix}`;
    return found;
  });

  return res;
}

export function splitNumIntoTriads(v, splitter = ' ') {
  const str = String(v).replace(/\s/g, '');
  if (!/^\d+(\.\d+)?$/.test(str)) {
    return '';
  }
  const part = str.split('.');
  const headLen = part[0].length % 3;

  part[0] = part[0].replace(
    RegExp(`(${headLen ? `^\\d{${headLen}}|` : ``}\\d{3})(?!$)`, `g`),
    `$1${splitter}`
  );
  return part.join('.');
}

export const getList = (v, splitter) => {
  let ret = isStr(v) ? v.split(/\s*,\s*|\s+/) : isArray(v) ? v : [];
  return isStr(splitter) ? ret.join(splitter) : ret;
};

export const markupLinks = (
  post,
  { newTab = true, text = 'Click here' } = {}
) => {
  const links = post?.match(URL_RE);
  const strNewTab = newTab ? NEW_TAB : '';

  const link = url =>
    `<a href="${url}" title="${url}" ${strNewTab}>${text || 'Link'}</a>`;

  const formatted = links?.reduce((_, itm) => {
    // need protocol
    const url = /^http.*/i.test(itm) ? itm : `https://${itm}`;
    return post.replace(itm, link(url));
  }, post);

  return formatted ?? post ?? '';
};

export function setProp(obj, path, value, splitter = '/') {
  if (typeof obj !== 'object') return;

  return String(path)
    .split(splitter)
    .reduce((ref, key, idx, arr) => {
      if (idx === arr.length - 1) ref[key] = value;
      // create object
      return ref[key] || (ref[key] = {});
    }, obj);
}

export function getProp(obj, path, splitter = '/') {
  try {
    return String(path)
      .split(splitter)
      .reduce((ref, key) => ref[key], obj);
  } catch {
    // empty
  }
}

/** @param {unknown[]} col */
export const sortObj = (col, { key, ascending = true } = {}) => {
  if (!isArray(col) || !col.length) {
    return [];
  }
  if (!Object.hasOwn(col[0], key)) {
    return [...col];
  }
  const order = +!!ascending || -1;
  const compareFn = isNum(col[0][key])
    ? (a, b) => (a[key] - b[key]) * order
    : (a, b) => a.localeCompare(b) * order;

  return [...col].sort(compareFn);
};

export const isVScrollBarVisible = () => {
  const { body } = document;
  const curBodyClientWidth = body.clientWidth;
  const curBodyOverflow = body.style.overflow;

  body.style.overflow = 'hidden';
  const res = curBodyClientWidth !== body.clientWidth;
  body.style.overflow = curBodyOverflow;

  return res;
};

export const onImageLoad = (img, callback) => {
  if (!img) return;
  const image = new Image();
  image.src = img.src || img;
  image.onload = callback;
};
