/* eslint-disable no-unused-vars */
function linearSearch(haystack: any[], needle: any): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}
// time complexity: O(n)
