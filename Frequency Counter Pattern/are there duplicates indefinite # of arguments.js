// Implement a function called areThereDuplicates which accepts a variable number of arguments
// and checks whether there are any any duplicates passed in
// time complexity: O(n)
// space complexity: O(n)
// by using the rest parameter syntax, of ...args, a function can accept
//  an indefinite number of arguments as an array.

function areThereDuplicates(...args) {
      console.log(args)
      let arr = args
      if(arr.length === 1){return false}
      console.log(arr)
      let counts = {}
      for(let key of arr){
          counts[key] = (counts[key] || 0) + 1
          console.log(counts[key])
      }
      console.log(counts)
      for(let val in counts){
          console.log(val)
          if (counts[val] > 1) {
              console.log(counts[val])
              return true
          }
      }
      console.log(false)
      return false
    }
  
// areThereDuplicates(1, 2, 3, 4, 1, 1, 1, 1)
  
areThereDuplicates([1, 2, 3, 4, 1, ])