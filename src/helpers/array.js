import { getRandomInt } from 'helpers/number';

export const getRandomElement = (a) => {
  const max = a.length - 1;
  return a[getRandomInt(max)];
};
