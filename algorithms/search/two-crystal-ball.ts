/*
  Given a building with N number of floors,
  you must find the floor where dropping a crystal ball will result in the crystal ball breaking.
  You are given two crystal balls to find the lowest floor that will cause the crystal ball to break.
  Find the most optimal way to search for the correct floor.
*/
function twoCrystalBallSearch(haystack: boolean[]): number {
  let jumpAmount: number = Math.floor(Math.sqrt(haystack.length));
  let i: number = jumpAmount
  for(; i < haystack.length; i += jumpAmount){
    if(haystack[i]){
      i -= jumpAmount //go back to last safe point where ball didn't break
      break;
    }
  }
  for(let j: number = i; j< i + jumpAmount; j++){
    if(haystack[j]) {
      return j;
    }
  }
  return -1;
}
// time complexity: O(√N)
