/**
 * QUICK SORT
 * like merge sort, exploits the fact that arrays of length 0 or 1 are always sorted.
 * It works by selecting one element (a PIVOT point) and finding the index where the pivot should end up in the sorted array.
 * Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
 * 
 * step 1 - [5, 2, 1, 8, 4, 7, 6, 3], we pick 5 as pivot, so the appropriate position for 5 would be the 4th index since 4 elements are less than 5.
 * step 2 - [3, 2, 1, 4, 5, 7, 6, 8], pivot = 3
 * step 3 - [2, 1, 3, 4, 5, 7, 6, 8], pivot = 2
 * step 4 - [1, 2, 3, 4, 5, 7, 6, 8], pivot = 7
 * step 4 - [1, 2, 3, 4, 5, 6, 7, 8], pivot = 7
 * 
 */

/** 
 * PSEUDOCODE FOR PIVOT HELPER FUNCTION
 * it will help to accept three arguments: an array, a start index and an end index (these can default to 0 and array.length - 1, respectively).
 * Grab the pivot from the start of the array.
 * Store the current pivot index in a variable (this will keep track of where the pivot should end up).
 * Loop through the array from the start until the end:
 *          - if the pivot is greater than the current element, increment the pivot index variable then swap the current element with the element at the pivot index
 * Swap the starting element(i.e. the pivot with the pivot index)
 * Return the pivot index
 * 
 */
 function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
 }
  
 /**
 * QUICKSORT PSEUDOCODE
 * Call the pivot helper on the array
 * When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
 * Your base case occurs when you consider a subarray with less than 2 elements
 */
  function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

console.log(quickSort([4,6,1,7,9,8,2,3,5]))