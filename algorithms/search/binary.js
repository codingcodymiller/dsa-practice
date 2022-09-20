function binarySearch(array, value) { // argument array values must be ordered
  return search(array, value, 0, array.length - 1);
}

function search(array, value, min, max) {
  if (min === max) return false;
  const mid = Math.trunc(min + ((max - min) / 2));
  if (array[mid] === value) {
    return true;
  } else if (array[mid] > value) {
    return search(array, value, min, mid - 1);
  } else if (array[mid] < value) {
    return search(array, value, mid + 1, max);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9)); // return false
