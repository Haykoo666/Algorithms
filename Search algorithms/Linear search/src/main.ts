/* 
  Linear Search
  A linear search works by going through each element of the array one index after another
  sequentially. 
  The following code example is an implementation of a linear search that
  iterates through the entire array of numbers to find out whether 4 and 5 exist within the array.
*/

/**
  Performs a linear search on an array to find a given target value.
 * @param {number[]} arr - The array to be searched.
 * @param {number} target - The target value to search for.
 * @returns {boolean} True if the target value is found in the array, false otherwise.
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * const target = 6;
 * const isFound = linearSearch(arr, target);
 * console.log(isFound); // Output: true
 * Time Complexity: O(n)
 * Space Complexity: O(1)
*/

const linearSearch = (arr: number[], target: number): boolean => {

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) {
      return true
    }
  }

  return false
}

linearSearch([1,2,3,4,5,6,7,8,9], 6)

export { 

};