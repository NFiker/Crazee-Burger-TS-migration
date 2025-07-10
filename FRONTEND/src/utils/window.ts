export const refreshPage = () => window.location.reload();

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//Generic version
// export const getLocalStorage = <T>(key: string): T | null => {
//   const item = localStorage.getItem(key);
//   return item ? (JSON.parse(item) as T) : null;
// };

//"Unknown" version
export const getLocalStorage = (key: string): unknown | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
