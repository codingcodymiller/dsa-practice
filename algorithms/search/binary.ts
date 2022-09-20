function binarySearch(haystack: number[], needle: number): boolean { // argument haystack values must be ordered
  return search(haystack, needle, 0, haystack.length);
}

function search(haystack: number[], needle: number, min: number, max: number): boolean {
  if (min === max) return false;
  const mid: number = Math.floor(min + ((max - min) / 2));
  if (haystack[mid] > needle) {
    return search(haystack, needle, min, mid);
  } else if (haystack[mid] < needle) {
    return search(haystack, needle, mid + 1, max);
  }
  return true;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9)); // return false
