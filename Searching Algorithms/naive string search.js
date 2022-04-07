// Naive string search
// define a function that takes 2 strings and counts the number of times a substring appears in a larger string

// Pseudocode:
// loop over the longer string
// loop over the shorter string
// if the characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

// naiveStringSearch('my name is tanaka','name') 1
// naiveStringSearch('how many ways are there ways to solve a problem?','ways') 2
function naiveStringSearch(mainstr, substr) {
    let count = 0
    for (let i = 0; i < mainstr.length; i++) {
        for(let j = 0; j < substr.length; j++){ 
            // console.log(mainstr[i], substr[j])
            if (substr[j] !== mainstr[i+ j]) { //adding i + j in the indices of mainstr lets us look ahead in mainstr as we loop over substr
                // console.log('break')
                break  
            }
            if(j === substr.length - 1){ // a match is found if j is the last char index of substr
                // console.log('match')
                count++
            }
        }
    }
    return count
}


naiveStringSearch('my age is 25','age') // 1