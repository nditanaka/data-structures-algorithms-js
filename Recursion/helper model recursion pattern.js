// Helper method recursion
// a pattern where an outer function that is not recursive calls an inner function that is recursive.
// useful when we are trying to compile some result in a reference type eg. an array.
function collectOdds(numsArr) {
    let result = []
    function helper(nums) {
        if(nums.length === 0){
            return 
        }
        if(nums[0] % 2 !== 0){
            result.push(nums[0])
        }
        helper(nums.slice(1))
    }
    helper(numsArr)
    return result
        
}

collectOdds([1,2,3,4,5,6,6,7,8,9,10,11])


// Pure recursion without helper function
function collectOddsPure(arr){
    let newArr = []
    if(arr.length === 0){
        return
    }
    if(arr[0] % 2 !== 0 ){ 
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddsPure(arr.slice(1)))
    return newArr
}

collectOddsPure([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11])

/*
Pure recursion tips

- For arrays, use methods like slice, the spread operator and concat
  that make copies of arrays so you don't mutate the original input array
- Strings are immutable so you will need to use methods like slice,
  substr or substring to make copies of strings
- To make copies of objects, use Object.assign, or the spread operator.
*/