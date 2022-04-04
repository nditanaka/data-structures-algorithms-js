// Multiple Pointers Pattern
// space complexity - O(1)
// time complexity - O(n)
function sumZero(arr) {
    // function returns the pair of numbers that equals 0 when added
    // use two pointers: left and right and while left < right, 
    // check if sum === 0. If true, return arr[left], arr[right]
    // else if sum > 0: right--. else left--
    let left = 0
    let right = arr.length - 1
    while(right > left){
        let sum = arr[right] + arr[left]
        if(sum === 0){
            return [arr[right], arr[left]]
        } else if(sum > 0){
            right--
        } else {
            left++
        }
    }
}

// O(n^2), because T(n) = n * n
// space complexity - O(1) 
function naivesumZero(arr) {
    for (let i = arr.length - 0; i >= 0; i--){
        for (let j = 0; j < arr.length; j++){
                if (arr[i] + arr[j] === 0) {
                    return [arr[i], arr[j]]
                }
        }
    }
}