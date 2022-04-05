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


// common problems implementing recursion:
// 1. no base case resulting in infinite loops/ max call stack size exceeded errors which is a stack overflow error.
// 2. returning the wrong thing/ forgetting to return. You also have to remember to call the function on a changing value. 
//    if called on the same thing, the result of factorial will not change. Recursion is built on returning in your base case, then returning in the function.