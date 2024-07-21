/**
 * sortStrings - сортирует массив строк по двум критериям: "asc" или "desc"
 * @param {string[]} arr - массив строк
 * @param {string} [param="asc"] param - тип сортировки: "asc" или "desc"
 * @returns {string[]} отсортированный массив строк
 */
export function sortStrings(arr, param = 'asc') {
  // Создаем копию массива, чтобы не изменять исходный массив
  const sortedArr = [...arr];
  
  // Определяем, нужно ли сортировать в обратном порядке
  const isDescending = param === 'desc';

  // Сортируем массив
  return sortedArr.sort((a, b) => {
    // Используем localeCompare с опциями для учета регистра и локалей
    const result = a.localeCompare(b, ['ru', 'en'], { sensitivity: 'variant', caseFirst: 'upper' });
    // Если нужно сортировать в обратном порядке, инвертируем результат
    return !isDescending ? result : -result;
  });
}
