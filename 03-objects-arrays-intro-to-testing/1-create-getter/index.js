/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path.split('.');

  return function(obj) {
    return fields.reduce((accumulator, currentField) => {
      if (accumulator === null || accumulator === undefined || !accumulator?.hasOwnProperty(currentField)) {
        return undefined;
      }
      return accumulator[currentField];
    }, obj);
  };
}
