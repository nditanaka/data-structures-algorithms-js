// Binary Search
// time complexity O(log(n)) worst and average case- much fewer operations than a linear search. best case O(1)
// space complexity O(1)
// requires a sorted array as input!

function binarySearch(arr, el) {
    /*
    params: arr: a sorted array
            val: the target element to be found
    returns: the index of el in arr else -1
    */
    // set min and max. while min < max, let mid = Math.floor((min + max)/2).
    // if(arr[mid] < val), let min = mid + 1.
    // else if(arr[mid] > val), max = mid -1.
    // else return mid. endwhile return -1 if el not found
    let min = 0
    let max = arr.length - 1
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (arr[mid] < el) {
            min = mid + 1
        } else if (arr[mid] > el) {
            max = mid - 1
        } else {
            return mid
        }
    }
    return -1
    
}
binarySearch([1,2,3,4,5,6,7,8,9,10], 5)
