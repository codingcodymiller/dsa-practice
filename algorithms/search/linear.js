/* eslint-disable no-unused-vars */
function linearSearch(source, targetValue) {
  for (const [key, value] of source) {
    if (value === targetValue) return key;
  }
  return -1;
}
// time complexity: O(n)
