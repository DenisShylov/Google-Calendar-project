export const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to

  const numberArr = [];
  for (let i = from; i <= to; i += 1) {
    numberArr.push(i);
  }
  return numberArr;
};
