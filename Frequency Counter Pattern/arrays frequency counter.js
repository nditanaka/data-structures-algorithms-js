// Frequency counter pattern
// time complexity - O(n), T(n) = n + n + n + n = O(4n)
// space complexity - O(n) as 2 additional objects of length 2n are allocated in memory
function frequencyCounter(arr1, arr2) {
    // initialize counter objects since they have fast access O(1) and are unordered
    // return false if arr1 and arr2 lengths are not the same
    // loop over arr1 and arr2 and populate counts in objects
    // loop over count1 and if either count2 doesn't contain count1's key ^ 2, or count1[key] !== count2[key^2], return false
    // arr2's keys are arr1's ^ 2
    let count1 = {}
    let count2 = {}
    if (arr1.length !== arr2.length) {
        return false 
    }
    for (let val of arr1) {
        count1[val] = (count1[val] || 0) + 1
    }
    for (let val of arr2) {
        count2[val] = (count2[val] || 0) + 1
    }
    for (let key in count1) {
        if (!(key ** 2) in count2) {
            return false
        }
        if (!count2[key ** 2] === count1[key]) {
            return false
        }
    }
    return true
}

function naivefrequencyCounter1(arr1, arr2) {
    // if lengths of arr1 and arr2 are the same
    // loop over arr1 and arr2 and check that each element in arr1 squared is contained in arr2
    // if arr[i] is not in arr2 then set result to false
    // else result = true
    //  return result
    // time complexity - O(n^2) - this is the naive approach and we should avoid nested loops as they scale badly as n grows.
    // space complexity - O(1) - only the boolean variable result is allocated
    let result = true
    if(arr1.length === arr2.length){
        for(let i = 0; i < arr1.length; i++){
            for(let j = 0; j < arr2.length; j++){
                if(arr1[i] ^ 2 === arr2[j]){
                    break
                } else{
                    result = false
                }
            }
        }
        return result
    }else{
        result = false
    }
    return result
}

function naivefrequencyCounter2(arr1, arr2) {
    // check if arr1 and arr2 have the same length and return false if they don't
    // if they do, then loop over arr1 and check if arr2 contains arr1[i] ^ 2
    // if it does, set this to correctIndex
    // arr2.splice(correctIndex, 1) to remove the current element
    // if it does not then return false
    // return true
    // O(n^2) - this is the naive approach. indexOf implements a loop so this is still a nested loop
    if(arr1.length !== arr2.length){return false}
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){return false}
        arr2.splice(correctIndex, 1)
    }
    return true  
}


