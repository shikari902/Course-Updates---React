function transformToObjects(numberArray) {
  const objectsArray = numberArray.map(num => ({ value: num }));
  return objectsArray;
}