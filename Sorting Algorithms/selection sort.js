/**
 * 
 * SELECTION SORT
 * similar to bubble sort, but instead of placing large values into sorted position, it places small values into sorted position.
 * selection sort finds a minimum, and swaps it with the beginning array.
 * 
 * time complexity : O(n^2)
 * space complexity: O(1). Selection sort is better than bubble sort if you're worried about the number of memory write operations.
 * PSEUDOCODE
 * Store first element as the smallest val.
 * Compare this item to the next item until you find a smaller number.
 * If a smaller number is found, set it to the minimum and and continue until the end of the array.
 * If the minimum is not the value (index) you initially began with, swap the two values.
 * Repeat this with the next element until the array is sorted.
 */

function selectionSort(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) { //optimization to prevent unnecessary swap operations.
            swap(arr, i, min)
        }
    }
    console.log(arr)
    return arr
}


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(selectionSort([10,8,9,7,4,5,3,2,1]))