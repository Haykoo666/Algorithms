/**

  A binary search algorithm to find a specific key in an array of numbers using recursion
*  @param {number[]} arr - The array of numbers to search through
*  @param {number} key - The number to search for in the array
*  @param {number} [start = 0] - The start index of the search range
*  @param {number} [end = arr.length - 1] - The end index of the search range
*  @returns {number} - The index of the key in the array or -1 if it is not found
*  @example
*  binarySearchRecursive([1, 2, 3, 4, 5, 6], 6);
*  // returns 5
*/


function binarySearchRecursive(arr: number[], key: number, start: number = 0, end: number = arr.length - 1): number {

  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    return binarySearchRecursive(arr, key, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, key, mid + 1, end);
  }
}

binarySearchRecursive([1, 2, 3, 4, 5, 6], 6)

export {
  
}