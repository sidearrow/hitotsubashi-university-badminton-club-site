const BASE_URL = 'https://hit-u-badminton.microcms.io/api/v1';
const HEADERS = {
  'X-API-KEY': '79eaf845-dba8-4355-83d0-6c4dcc7b876c',
};

async function get(path: string) {
  const res = await fetch(BASE_URL + path, { headers: HEADERS });
  const data = await res.json();
  return data;
}

export const microCmsUtil = {
  get: get,
};
