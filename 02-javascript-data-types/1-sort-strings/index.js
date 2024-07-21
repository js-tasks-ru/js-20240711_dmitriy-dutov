/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  // Создаем копию массива
  const newArr = [...arr];
  
  // Флаг для сортировки в обратном порядке
  const isDescending = param === 'desc';

  // Сортируем массив
  newArr.sort((a, b) => {
    // Сначала проверяем регистр
    if (a[0].toUpperCase() === a[0] && b[0].toUpperCase() !== b[0]) return -1;
    if (a[0].toUpperCase() !== a[0] && b[0].toUpperCase() === b[0]) return 1;

    // Используем localeCompare с учетом локали и регистра
    const comparison = a.localeCompare(b, undefined, { sensitivity: 'case', ignorePunctuation: true });

    // Если нужно сортировать в обратном порядке, инвертируем результат
    return isDescending ? -comparison : comparison;
  });

  return newArr;
}

