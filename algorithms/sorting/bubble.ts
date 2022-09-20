function bubbleSort(array: any[]): any[]{
  let end = array.length;
  let sorted: boolean = true;
  do {
    sorted = true;
    for(let i = 0; i < end; i++){
      if(array[i] > array[i + 1]){
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
    end--; // the last item is guaranteed to be the largest value, so each iteration can verify one less value
  } while(!sorted)
  return array;
}
console.log(bubbleSort([2,534,6,1,63,1234,7,6,9]))
// time complexity O(N^2)
