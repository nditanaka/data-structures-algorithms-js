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