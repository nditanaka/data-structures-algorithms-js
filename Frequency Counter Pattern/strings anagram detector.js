// Frequency checker pattern variation
// O(n) because each for loop adds n operations thus T(n) = n + n = 2n ∴ O(n)
function isAnagram(str1, str2) {
    // if str1.length !== str2.length return false
    // iterate over str1 and store chars and counts in lookup
    // iterate over str2 and check if vals are in lookup's keys. if not return false
    // if str2 val is in lookup, decrement count. 
    // If you check a val that is not lookup, it will be falsy
    if(str1.length !== str2.length){return false}
    const lookup = {}
    for(let val of str1){
        lookup[val] ? lookup[val] += 1 : lookup[val] = 1
    }
    console.log('str1 ->', str1)
    console.log('str2 ->', str2)
    console.log('lookup complete with str1 ->', lookup)
    for(let val of str2){
        if(!lookup[val]){
            return false
        } else {
            lookup[val] -= 1
        }
    }
        return true
}

// O(n) but asymptotic notation goes to T(n) = n + n + n = O(3n) ∴ O(n). 
// for array size n, n = 1000 means ~3000 operations.
// 2 nested loops would mean T(n) = n * n = O(n^2). We should avoid nested loops.
function naiveIsAnagram(str1, str2) {
    // check if str1 and str2 have the same length
    // loop over str1 and store characters and counts in count1
    // loop over str2 and store chars and counts in count2
    // loop over count1 and check if count1[key] === count2[key]. check if key in count2. return false if not.
    // return true if str2 is an anagram of str1
    if (str1.length !== str2.length) { return false }
    let count1 = {}
    let count2 = {}
    for (let val of str1) {
        count1[val] = (count1[val] || 0) + 1 // ternary statement
    }
    for (let val of str2) {
        count2[val] = (count2[val] || 0) + 1
    }
    for (let key in count1) {
        if (!count1[key] in count2) {
            return false
        }
        if (count1[key] !== count2[key]) {
            return false
        }
    }
    return true
}

