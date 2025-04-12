export const deepClone = <T>(array: T[]): T[] =>
  JSON.parse(JSON.stringify(array));

type ID = string | number;

export const findObjectById = <T extends { id: ID }>(
  id: ID,
  array: T[]
): T | undefined => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexById = <T extends { id: ID }>(
  idWithUnknownIndex: ID,
  array: T[]
): number => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknownIndex
  );
};

export const removeObjectById = <T extends { id: ID }>(
  idOfItemToRemove: ID,
  array: T[]
): T[] => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isEmpty = <T>(array: T[]): boolean => array.length === 0;
