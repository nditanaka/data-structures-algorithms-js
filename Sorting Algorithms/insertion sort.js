/**
 * 
 * INSERTION SORT
 * similar to bubble sort, and selection sort but instead of placing large values into sorted position 
 * (bubble sort) or small values into sorted position at the beginning (selection sort), 
 * insertion sort builds up a sorted array by gradually creating a larger left half which is always sorted
 * insertion sort inserts each element of the array into it's correct sorted position
 * 
 * time complexity : O(n^2)
 * space complexity: O(1). Selection sort is better than bubble sort if you're worried about the number of memory write operations.
 * PSEUDOCODE
 * Start by picking the selected element in the array
 * Now compare the second element with the one before it and swap if necessary
 * Continue to the next element and if it is in 
 */

 function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal
    }
    return arr
}