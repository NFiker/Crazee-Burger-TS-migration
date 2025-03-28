export const deepClone = (array) => JSON.parse(JSON.stringify(array));

export const findObjectById = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexById = (idWithUnknownIndex, array) => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknownIndex
  );
};

export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isEmpty = (array) => array.length === 0;
