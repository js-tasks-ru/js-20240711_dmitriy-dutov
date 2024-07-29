/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj === undefined) return;

  const entries = Object.entries(obj);
  const invertedObj = entries.reduce((accumulator, [key, value]) => {
    accumulator[value] = key;
    return accumulator;
  }, {});

  return invertedObj;
}