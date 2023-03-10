/* 
  Binary search

  Binary search is a searching algorithm that works on sorted data. Unlike the linear search
  algorithm, in which every element of the array is checked, binary searches can check the
  middle value to see whether the desired value is greater or smaller than it. If the desired
  value is smaller, this algorithm can search through the smaller parts, or it can search
  through the bigger parts if the desired value is biggerю

  !Important Note: The binary search algorithm works only on sorted data.
*/


/**

A binary search algorithm to find a specific key in an array of numbers
 * @param {number[]} arr - The array of numbers to search through
 * @param {number} key - The number to search for in the array
 * @returns {number} - The index of the key in the array or -1 if it is not found
 * @example
    binarySearch([1, 2, 3, 4], 4);
    // returns 3
    binarySearch([1, 2, 3, 4], 5);
    // returns -1
 * Time complexity: O(log n)
 * Space complexity: O(n)
*/

function binarySearch(arr: number[], key: number): number {
  let start = 0,
      end = arr.length - 1;

  while (start <= end) {
    let midIndex = Math.floor((end + start) / 2);
    
    if (arr[midIndex] === key) {
      return midIndex;
    } else if (arr[midIndex] < key) {
      start = midIndex + 1;
    } else {
      end = midIndex - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4], 4)); // true
console.log(binarySearch([1, 2, 3, 4], 5)); // -1



export {

}