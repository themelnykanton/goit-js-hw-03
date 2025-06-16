
function filterArray(numbers, value) {
  return numbers.filter(item => item > value);
}

function filterArray_2(numbers, value) {
  const newArray = [];

  for (const elem of numbers) {
    if (elem > value) {
      newArray.push(elem);
    }
  }

  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray_2([1, 2, 3, 4, 5], 3)); // [4, 5]

console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray_2([1, 2, 3, 4, 5], 4)); // [5]

console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray_2([1, 2, 3, 4, 5], 5)); // []

console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray_2([12, 24, 8, 41, 76], 38)); // [41, 76]

console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log(filterArray_2([12, 24, 8, 41, 76], 20)); // [24, 41, 76]