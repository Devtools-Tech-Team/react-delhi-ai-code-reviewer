function countBy(collection, iteratee) {
  const keys = Object.keys(collection);
  const response = {};

  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    const value = collection[currentKey];
    let result;

    if (!iteratee) {
      result = value.toString();
    } else if (typeof iteratee === "function") {
      result = iteratee(value);
    } else if (Object.prototype.hasOwnProperty.call(value, iteratee)) {
      result = value[iteratee];
    }

    if (Object.prototype.hasOwnProperty.call(response, result)) {
      response[result] += 1;
    } else {
      response[result] = 1;
    }
  }

  return response;
}
