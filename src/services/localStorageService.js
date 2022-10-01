export let localStorageService = {
  set: (key, value) => {
    let dataJSON = JSON.stringify(value);
    localStorage.setItem(key, dataJSON);
  },
  get: (key) => {
    let dataJSON = localStorage.getItem(key);
    if (!dataJSON) {
      return null;
    } else {
      return JSON.parse(dataJSON);
    }
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
