/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let result = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (fields.includes(key)) {
      result[key] = value;
    }
  });

  return result;
};
