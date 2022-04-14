/**
 * MERGE SORT
 * a combination of two things - merging and sorting.
 * It exploits the fact that arrays of length 0 or 1 are always sorted.
 * It works by decomposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array.
 * 
 * HELPER FUNCTION
 * it is useful to first implement a helper function for merging two sorted arrays.
 * Given two arrays that are sorted, this helper function should create a new array which is also sorted, and consists 
 * of all all the elements in the two input arrays.
 * This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it where n and m
 * are the lengths of input arrays n and m respectively
 * 
 * PSEUDOCODE for merge helper function
 * Create an empty array, take a look at the smallest values in each input array. While there are still values we have not
 * looked at: 
 *          - if the value in the first array is smaller than the value in the second array, push the value in the first array
 *            into our results and move on to the next value in the first array.
 *          - if the value in the first array is larger than the vlaue in the second array, push the value in the second array
 *            into our results and move on to the next value in the second array.
 *          - once we exhaust one array, push in all remaining values from the other array.
 * 
 */

function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            // case arr1[i] and arr2[j] are equal, or arr1[i] is greater
            results.push(arr2[j])
            j++
        }
    }
    // case we have not looked at all values of arr1
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    // case we have not looked at all values of arr2
    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))

/**
 * PSEUDOCODE for mergeSort
 * Break up the array into halves until you have arrays that are empty or have one element
 * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 * Once the array has been merged back together, return the merged (and sorted!) array
 * time complexity: O(nlogn)
 * space complexity: O(n)
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([100, 10, 50, 2, 99, 14, 1]))