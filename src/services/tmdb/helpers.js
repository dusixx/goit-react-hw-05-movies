import { normalizeStr } from 'utils';
/**
 *
 * Убирает дублирование персон, сворачивая поле job в список
 * @param {array} crew - массив данных (объектов) о съмочной группе
 * @returns - массив объектов без дублирования
 */
export const normalizeCrewData = crew => {
  const hash = crew.reduce((res, { id, job, ...rest }) => {
    if (res[id]) res[id].job.push(job);
    else res[id] = { ...rest, id, job: [job] };

    return res;
  }, {});

  //   преобразуем job в строку, чтобы не делать это в целевом компоненте
  return Object.values(hash).map(({ job, ...rest }) => ({
    ...rest,
    job: job.join(', '),
  }));
};

/**
 * Информация об актерах
 *
 * @param {object} credits - объект с массивами cast и crew
 * @param {number} count - кол-во имен актеров для анонса
 *
 * @returns {object}
 *  {preview, remaining}
 *    preview - строка-список имен (анонс)
 *    remaining - строка (оставшиеся) для ссылки на страницу всех актеров
 */
export const getCastPreview = (credits, count = 5) => {
  if (!Array.isArray(credits?.cast)) return;
  const { cast } = credits;

  // валидность данных массива не проверяем (для упрощения)
  const castList = cast
    .slice(0, count)
    .map(({ original_name, name }) => original_name || name);

  const remainingCount = cast.length - castList.length;
  const remaining =
    remainingCount > 0
      ? `...other ${remainingCount} actor(s)`
      : `...other actor(s)`;

  return castList.length > 0
    ? {
        preview: castList.join(', '),
        remaining,
      }
    : null;
};

/**
 * Информация об основном персонале
 *
 * @param {object} credits - объект с массивами cast и crew
 * @returns {object} - {director, screenplay, writer, ...}
 */
export const getCrewPreview = credits => {
  if (!Array.isArray(credits?.crew)) return;
  const { crew } = credits;

  let personsCount = 0;

  const personsList = {
    director: [],
    screenplay: [],
    writer: [],
    characters: [],
    story: [],
  };

  // known_for_department
  const data = crew.reduce((res, { department, job, name }) => {
    const jobName = normalizeStr(job);
    const dep = normalizeStr(department);

    if (jobName === 'director' && dep !== 'directing') return res;

    if (res[jobName]) {
      personsCount += 1;
      res[jobName] = [...res[jobName], name];
    }

    return res;
  }, personsList);

  return personsCount ? data : null;
};
