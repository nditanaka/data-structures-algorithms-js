// involves creating a 'window' which can either be an array or number from one position to another
// depending on a certain condition, the window either increases or closes ( and a new window is created)
// very useful for keeping track of a subset of data in an array/ string eg. finding the longest sequence of unique characters,


// find the maximum sum of n consecutive elements in an array.
// maxSubarraySum - sliding window pattern
// time complexity - O(n)
// space complexity - O(1) as no extra memory is allocated except for variables
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num){return null}
    for(let i = 0; i < num; i++){ //calculate sum of first n elements
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) { //recalculate sum of first elements by subtracting the first element and add the 4th element
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum

}

maxSubarraySum([1,2,3,4,5,6,7,8,9],2)

// naive approach
// time complexity - o(n^2) - scales badly as n grows
// space complexity - O(1)
function naiveMaxSubarraySum(arr, num) {
    if(num > arr.length){
        return null
    }
    let max = -Infinity
    for(let i = 0; i < arr.length - num + 1; i++){
        let temp = 0
        for(let j = 0; j < num; j++){
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}