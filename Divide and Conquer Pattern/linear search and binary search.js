// Divide and Conquer Pattern
// involves dividing a data set into smaller chunks and repeating a process with a subset of data.
// can tremendously decrease time complexity
// merge sort and quick sort are examples of sorting algos with this characteristic.
// binary search has this characteristic as well

// Binary Search
// time complexity O(log(n)) - much fewer operations than a linear search.
// space complexity O(1)
const binarySearch = (arr, val) => {
    /*
    params: arr: a sorted array
    val: the target element to be found
    returns: the index of val in arr else -1
    */
    // set max and min
    // while min <= max, mid = (min + max)/2
    // if(arr[mid] < val) set min to mid + 1
    // else if arr[mid] > val set max to mid - 1
    // else return mid
    let min = 0
    let max = arr.length - 1
    while(min <= max){
        let mid = Math.floor((max + min)/2)
        if(arr[mid] < val){
            min = mid + 1
        } 
        else if(arr[mid] > val){
            max = mid - 1
        }
        else{
            return mid
        }
    }
    return -1
}

// Naive search/ Linear search
// time complexity O(n)
// space complexity O(1)
const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}





