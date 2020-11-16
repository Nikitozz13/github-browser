import { sortData, remapData } from './utils';

export const fetchTreeData = (url) => {
  return fetch(url)
    .then(response => {
      const json = response.json();
      if (!response.ok) {
        throw json;
      }
      return json;
    })
    .then(data => sortData(data))
    .then(data => remapData(data));
};

export const fetchFileData = (url) => {
  return fetch(url, {
    headers: { 'Accept': 'application/vnd.github.VERSION.raw' }
  })
  .then(response => response.text());
};
