const fruits = {
  apple: 2,
  orange: 4,
  banana: 3
};

function pick(obj, ...fields) {
  let result = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (fields.includes(key)) {
      result[key] = value;
    }
  });

  return result;
}

console.log(pick(fruits, 'apple', 'banana'));
