/*
sorting is the process of rearranging the items in a collection eg. in an array so that they are in some kind of order.
    - time and space complexity is implementation dependent.
1. it works by sorting the array elements in place and returning the array. 
2. it is not a stable search. 
3. The default sort order is accoring to string Unicode points.
4. it works by converting everything to a string, then sorting by the value of the string's
   unicode character. doesn't yield expected results for numbers
5. accepts an optional comparator function which looks at pairs of elements, a and b
   and determines their sort order based on the return value:
    - if the comparator returns a negative number, a should come before b
    - else if it returns a positive number, a should come after b
    - else if it returns 0, a and b are treated as the same  by the sort.
*/

let array = ['i','c','h','a','e','g','b','d','f']
let nums = [5,4,6,3,7,1,8,2,9]
console.log(array)
console.log(array.sort())

console.log(nums)
console.log(nums.sort((a,b) => a < b ? -1 : 1))
console.log(nums.sort((a,b) => a - b))

let names = ['tanaka', 'takunda', 'angela', 'sarah', 'ruvimbo', 'wadzanayi', 'ziyanda']

function compareByLength(str1, str2){
    return str1.length - str2.length
}

console.log(names.sort((a,b) => compareByLength(a, b)))

