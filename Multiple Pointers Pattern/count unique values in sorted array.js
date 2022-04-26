/**  
 * Multiple pointers pattern
 * time complexity -> O(n)
 * space complexity -> O(n) from unique array allocation. 
 * initializing unique to 0 and incrementing instead of pushing arr[i] yields an improved space complexity of O(1)
 */ 
function countUniqueValues(arr) {
/** 
 * params: sorted array arr
 * returns count of unique values in arr
 * initialize 2 pointers and set i and j to i + 1. 
 * while j <= arr.length:
 * if i != j, and arr[i] !== arr[j], push arr[i] onto a new array unique. set i to j, and increment j. 
 * else incremement j.
 * endwhile return unique.length
 */
    let unique = []
    let i = 0
    let j = i + 1
    if(arr.length === 1){return 1}
    if(arr.length === 0){return false}
    while(j <= arr.length){
        if(i !== j){
            if(arr[i] !== arr[j] ){
                unique.push(arr[i])
                i = j
                j++
            }else{
                j++
            }
        } else{
            j++
        }
        
    }
    return unique.length
}

/**
 * time complexity -> O(n)
 * space complexity -> O(1) since no additional memory is allocated besides the primitive typed var i, and the input array is mutated.
 * 
 * DRY RUN
 * step 1- ['a','b','c','c','d'], i = 0, j = 0
 *           0   1   2   3   4
 * step 2- ['a','b','c','c','d'], i = 0, j = 1
 * step 3- ['a','b','c','c','d'], i = 1, j = 2
 * step 4- ['a','b','c','c','d'], i = 2, j = 3
 * step 5- ['a','b','c','d','d'], i = 3, j = 4 - increment i & set arr[i] = arr[j] in this step
 * step 6- ['a','b','c','d','d'], i = 3, j = 5 === arr.length ∴ skip for-loop and return i + 1 === 4
 */ 
function countUniqueValuesSimple(arr) {
    // iterate over arr, if arr[i] !== arr[j], increment i, assign arr[i] = arr[j]
    if (arr.length === 0) { return 0 }
    let i = 0
    for (let j = 0; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++ // increment to build sorted no duplicates list at beginning of array arr
            arr[i] = arr[j]
        }
    }
    return i + 1
}

countUniqueValuesSimple(['a','b','c','c','d'])
