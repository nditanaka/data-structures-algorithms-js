// indexOf(el), includes, find, findIndex all run linear searches under the hood,
// hence their time complexity is typically O(n)


// Q. write a function that accepts an array and a value. loop through the array and check
// if the current array element is equal to the value argument. if it is, return the index
// at which the element (value) is found. if it is never found, return -1

// Linear search
// time complexity = T(n) = n + 1 ∴ O(n), big Omega = Ω(1) - best case 
// space complexity = O(1) as no additional memory is allocated
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log(i)
            return i
        }
    }
    return -1
}

linearSearch([1,2,3,4,5,6,7,8,10,9],11)