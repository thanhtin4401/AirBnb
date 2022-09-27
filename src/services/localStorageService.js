const USER = 'USER';
export let localStorageService = {
  user: {
    set: (dataUser) => {
      let dataJSON = JSON.stringify(dataUser);
      localStorage.setItem(USER, dataJSON);
    },
    get: () => {
      let dataJSON = localStorage.getItem(USER);
      if (!dataJSON) {
        return null;
      } else {
        return JSON.parse(dataJSON);
      }
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
};
