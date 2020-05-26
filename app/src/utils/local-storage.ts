
export const localStorageSet = (key: string, value: string) => {
  if (typeof (value) === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value)
};

export const localStorageGet = (key: string) => {
  return localStorage.getItem(key)
};

export const localStorageRemove = (key: string) => {
  localStorage.removeItem(key)
};

export const localStorageSetExpire = (key: string, value: string, expire: number) => {
  if (typeof (value) === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
    localStorage.removeItem(key)
  }, expire)
};