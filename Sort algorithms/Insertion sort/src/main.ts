/* 
  Insertion Sort

  Insertion sort works similarly to selection sort by searching the array sequentially and 
  moving the unsorted items into a sorted sublist on the left side of the array.
  The outer for loop iterates over the array indices, and the inner for loop moves the 
  unsorted items into thesorted sublist on the left side of the array.

  Again, this sorting algorithm has a quadratic time complexity of O(n2) 
  like bubble and insertion sort because of the nested for loop.
*/

type dataType = number[];

/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * Time Complexity: O(n2).
 * Space Complexity: O(1).
 * @param {number[]} arr - The input array.
 * @returns {number[]} The sorted array.
 */

const insertionSort = (arr: dataType): number[] => {

  for (let i = 1; i < arr.length; ++i) {
    let prev: number = i - 1;
    let key: number = arr[i];

    while (arr[prev] > key && prev >= 0) {
      arr[prev + 1] = arr[prev];
      --prev;
    }

    arr[prev + 1] = key;

  }

  return arr;

}

const data: dataType = [10, 5, 9, 1, 7, 2, 6]
console.log(insertionSort(data));

// ------ Another solution ------

// const insertionSort = (arr: number[]): number[] => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//   }
//   return arr;
// };

// const data: number[] = [10, 5, 9, 1, 7, 2, 6];
// console.log(insertionSort(data));

export {

}