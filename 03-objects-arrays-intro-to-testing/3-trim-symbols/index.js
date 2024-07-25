/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  // Если size равен 0, то возвращаем пустую строку
  if (size === 0) return '';
  
  // Если size не задан, возвращаем исходную строку
  if (size === undefined) return string;
  
  let result = '';
  let lastChar = '';
  let charCount = 0;

  for (let char of string) {
    if (char === lastChar) {
      // Увеличиваем счетчик, если символ совпадает с предыдущим
      charCount++;
    } else {
      // Обнуляем счетчик, если символ не совпадает с предыдущим
      charCount = 1;
      lastChar = char;
    }

    // Добавляем символ в результат, если счетчик не превышает size
    if (charCount <= size) {
      result += char;
    }
  }

  return result;
}
