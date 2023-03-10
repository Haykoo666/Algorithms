/* 
  Merge sort
  Mergesort works by dividing the array into subarrays until each array has one element.
  Then, each subarray is concatenated (merged) in a sorted order.

*/


/**
 * Sorts an array of numbers using the Merge sort algorithm.
 * Time Complexity: O(n log n) .
 * Space Complexity: O(1).
 * @param {number[]} arr - The input array.
 * @returns {number[]} The sorted array.
 */


const mergeSort = (arr: number[]): number[] =>{
  const half = Math.floor(arr.length / 2);

  // the base case is array length <= 1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half); 
  // the first half of the array
  const right = arr;
  // the secont half of the array
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
  let sortedArr: number[] = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift() as number);
    } else {
      sortedArr.push(right.shift() as number);
    }

  }
  // use spread operator to combine the three arrays as one
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([4, 7, 1, 9, 2]))


export {

}