function getSum(a, b) {
    /**   
    * iterate between a and b inclusive with an accumulator and return the accumulator.
    * time complexity: O(n)
    * space complexity: O(1)
    */
      if(a === b){return a}
      let sum = 0
      for(let val = (a > b ? b : a); val <= (b > a ? b : a); val++){
        sum += val
      }
      return sum
}
