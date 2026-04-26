import { normalizeStr } from '@common';
import { TmdbService } from '@services';

const srv = new TmdbService();

/* id(283546) -> crew "Luke Losey" Director/Writer, different IDs */
const normalizeCredits = (data, fieldName) => {
  if (!Array.isArray(data)) {
    return [];
  }
  const hash = data.reduce((res, personData) => {
    const { id } = personData;
    const fieldValue = personData[fieldName];

    if (res[id]) {
      res[id][fieldName].push(fieldValue);
    } else {
      res[id] = { ...personData, [fieldName]: [fieldValue] };
    }
    return res;
  }, {});

  return Object.values(hash).map(obj => ({
    ...obj,
    [fieldName]: obj[fieldName].join(', '),
  }));
};

export const normalizeCrewData = crew => normalizeCredits(crew, 'job');
export const normalizeCastData = cast => normalizeCredits(cast, 'character');

export const getCastPreview = (credits, count = 5) => {
  if (!Array.isArray(credits?.cast)) {
    return;
  }
  const { cast } = credits;

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

export const getCrewPreview = credits => {
  if (!Array.isArray(credits?.crew)) {
    return;
  }
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

    if (jobName === 'director' && dep !== 'directing') {
      return res;
    }
    if (res[jobName]) {
      personsCount += 1;
      res[jobName] = [...res[jobName], name];
    }
    return res;
  }, personsList);

  return personsCount ? data : null;
};

export const getAvatar = (path, width) => {
  return path
    ? /http/i.test(path)
      ? path.replace(/\//, '')
      : srv.getImageUrl(path, width)
    : null;
};
