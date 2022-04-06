// common problems implementing recursion:
// 1. no base case resulting in infinite loops/ max call stack size exceeded errors which is a stack overflow error.
// 2. returning the wrong thing/ forgetting to return. 
// 3. remember to call the function on a changing value. 
//    if called on the same thing, the result of factorial will not change. Recursion is built on returning in your base case, then returning in the function.

// Recursive Factorial
function factorial(num) {
    if (num === 1) { return 1 } // base case
    return num * factorial(num - 1)
}
factorial(3)


// simple iterative factorial
function simpleFactorial(num) {
    let total = 1
    for (let i = 1; i < num; i++){
        total *= i
    }
    return total 
}
simpleFactorial(10)


// more complex recursive sumRange function
function sumRange(num) {
    if (num === 1) { return 1 } // base case
    return num + sumRange(num - 1)
    
}
sumRange(5)


// simple recursive countDown function
function countDown(num) {
    if (num <= 0) { // base case
        console.log('all done')
        return
    }
    console.log(num)
    num--
    countDown(num)
}
countDown(5)


// naive iterative countdown
function iterativeCountDown(num) {
    for (let i = num; i > 0; i--){
        console.log(i)
    }
    console.log('all done')
}
iterativeCountDown(5)


// Write a function called productOfArray() 
// which takes in an array of numbers and returns the product of them all
function productOfArray(arr){
    let product = 1
    
    function helper(arr){
        if(arr.length === 0){
            return
        }
        product *= arr[0]
        helper(arr.slice(1))
    }
    helper(arr)
    return product
}


// write a function called power which accepts a base and exponent
//  and returns the power of base ^ exponent
function power(base, exp){
    let result = 1
    function helper(base, exp){
        if(exp === 0){
            return
        }
        result *= base
        helper(base, exp-1)
    }
    helper(base, exp)
    
    return result
}
power([1, 2, 3, 4, 5, 6])



