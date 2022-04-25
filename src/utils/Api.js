export const BASE_URL =
  'http://universities.hipolabs.com/search?country=United+Kingdom';

export const getUniversityInfo = (token) => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
