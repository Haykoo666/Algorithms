/* 
  Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire
  array and swaps elements if one is bigger than the other.
  Bubble sort is the worst type of sort because it compares every pair possible, whereas
  other sorting algorithms take advantage of the presorted parts of the array. Because
  bubble sort uses nested loops, it has a time complexity of O(n2).
*/

type dataType = number[];

const swap = function (arr: dataType, current: number, next: number): void {
  let temp = arr[current];
  arr[current] = arr[next];
  arr[next] = temp;
};

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * Time Complexity: O(n2).
 * Space Complexity: O(1).
 * @param {number[]} arr - The input array.
 * @returns {number[]} The sorted array.
 */

const BubbleSort = (arr: dataType): dataType => {
  let isSorted;
  for (let i = 0; i < arr.length - 1; ++i) {
    isSorted = true;

    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSorted = false;
      }
    }

    if (isSorted === true) break;
    
  }

  return arr;
};

const data: dataType = [10, 5, 4, 8, 1,];

console.log(BubbleSort(data));




export {

}