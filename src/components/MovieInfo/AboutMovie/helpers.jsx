const normalize = s => s.trim().toLocaleLowerCase();
const DEF_CAST_COUNT = 5;

/**
 * Информация об актерах
 *
 * @param {object} credits - объект с массивами cast и crew
 * @param {number} count - кол-во имен актеров для анонса
 * @returns {object}
 *  {preview, remaining}
 *    preview - строка-список имен
 *    remaining - строка оставшиеся для ссылки на страницу всех ролей
 */
export const getCastData = (credits, count = DEF_CAST_COUNT) => {
  if (!Array.isArray(credits?.cast)) return;
  const { cast } = credits;

  // валидность массива для простоты не проверяем
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
 * @param {*} credits
 * @returns
 */
export const getCrewData = credits => {
  if (!Array.isArray(credits?.crew)) return;
  const { crew } = credits;

  let crewListCount = 0;

  const crewList = {
    director: [],
    screenplay: [],
    writer: [],
    characters: [],
    story: [],
  };

  // known_for_department
  const data = crew.reduce((res, { department, job, name }) => {
    const jobName = normalize(job);
    const dep = normalize(department);

    if (jobName === 'director' && dep !== 'directing') return res;

    if (res[jobName]) {
      crewListCount += 1;
      res[jobName] = [...res[jobName], name];
    }

    return res;
  }, crewList);

  return crewListCount ? data : null;
};