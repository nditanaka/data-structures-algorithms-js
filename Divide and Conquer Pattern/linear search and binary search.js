/**
* Divide and Conquer Pattern
* involves dividing a data set into smaller chunks and repeating a process with a subset of data.
* can tremendously decrease time complexity
* binary search, merge sort and quick sort are examples of sorting algos with this characteristic.
*/

/**
 * BINARY SEARCH
 * time complexity O(log(n)) - much fewer operations than a linear search.
 * space complexity O(1)
 * 
 * PSEUDOCODE
 * set max and min
 * while min <= max, mid = (min + max)/2
 * if(arr[mid] < val) set min to mid + 1
 * else if arr[mid] > val set max to mid - 1
 * else return mid
 * 
 * DRY RUN
 * binarySearch([1,2,3,4,5,5,6,7,8,9,10],5)
 * 
 * step 1- [1,2,3,4,5,5,6,7,8,9,10], min = 0, max = 10, target = 5, mid = 5
 *          0 1 2 3 4 5 6 7 8 9 10
 * step 2- [1,2,3,4,5,5,6,7,8,9,10], i = 1
 * step 3- [1,2,3,4,5,5,6,7,8,9,10], i = 2
 * step 4- [1,2,3,4,5,5,6,7,8,9,10], i = 3
 * step 5- [1,2,3,4,5,5,6,7,8,9,10], i = 4, target = 5, arr[i] === 5 ∴ return i, 4
 *
 */
const binarySearch = (arr, val) => {
/**
 * BINARY SEARCH
 * params: arr: a sorted array
 * val: the target element to be found
 * returns: the index of val in arr else -1
 */ 
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

console.log(binarySearch([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10], 1))

/** 
 * Naive search/ Linear search
 * time complexity O(n)
 * space complexity O(1)
 *
 * DRY RUN
 * linearSearch([1,2,3,4,5,5,6,7,8,9,10],5)
 * 
 * step 1- [1,2,3,4,5,5,6,7,8,9,10], i = 0, target = 5, arr[i] !== 2, increment i
 *          0 1 2 3 4 5 6 7 8 9 10
 * step 2- [1,2,3,4,5,5,6,7,8,9,10], i = 1
 * step 3- [1,2,3,4,5,5,6,7,8,9,10], i = 2
 * step 4- [1,2,3,4,5,5,6,7,8,9,10], i = 3
 * step 5- [1,2,3,4,5,5,6,7,8,9,10], i = 4, target = 5, arr[i] === 5 ∴ return i, 4
 */
const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}

linearSearch([1,2,3,4,5,5,6,7,8,9,10],2)





