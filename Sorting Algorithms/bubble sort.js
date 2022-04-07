/*
Bubble sort
a sorting algorithm where the largest values bubble up to the top.
swapping is a big component of this algorithm. sorts in place.
- time complexity - O(n^2). if data is very nearly sorted, then best case is O(n)
- space complexity - O(1)
*/

// swapping function ES5
function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// shorthand ES2015 swapping function
// uses destructuring syntax
function swapModern(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// time complexity - O(n^2). if data is very nearly sorted, then best case is O(n)
// space complexity - O(1)
// sorts in place.
// using a variable to track when swaps are no longer taking place will stop the extra iterations after arr is now sorted
function optimalbubbleSort(arr) {
    let noSwaps //optimization to remove extra iterations when arr is now already sorted.
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){ // setting i - 1 as the terminating condition prevents checking already elements at the end of the array ie. 10 on first loop, 9 on next etc.
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]){  
            swap(arr, j, j + 1)
            noSwaps = false
            }
        }
        if(noSwaps){break}
        console.log('ONE PASS COMPLETE')
    }
    console.log(arr)
    return arr
}

optimalbubbleSort([10, 9, 7, 4, 2, 1, 3, 6, 5, 8])


// Bubble sort
// time complexity O(n^2)
// space complexity O(1)
function naiveBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length ; j++){
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
        console.log('ONE PASS COMPLETE')
    }
    console.log(arr)
    return arr
}

naiveBubbleSort([9, 8, 6, 1, 3, 5, 2, 4, 7, 10])

/*
OPTIMIZED PSEUDOCODE Bubble sort
1.Loop over the array from end to beginning (i counter)
2.Define inner loop (j counter) and loop from beginning to arr.length - 1
3.If arr[j] > arr[j + 1], swap these two variables
4.Return the sorted array
*/

// this naive bubble sort checks the last index on each run, even though by bubble sort's nature, 
// the last index becomes cemented once it is populated. some optimizations can be made by setting
//  the outer loop to start at the end, and the inner loop to terminate at i - 1
// at this point, bubbleSort still loops through the whole array some additional times even after everything is sorted.
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){ // setting i - 1 as the terminating condition prevents checking already elements at the end of the array ie. 10 on first loop, 9 on next etc.
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j + 1]){  
            swap(arr, j, j + 1)
            }
        }
        console.log('ONE PASS COMPLETE')
    }
    console.log(arr)
    return arr
}

bubbleSort([10, 9, 7, 4, 2, 1, 3, 6, 5, 8])


