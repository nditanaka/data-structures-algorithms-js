function order(words){
    /**   
    *  split words into array of word
    *  loop over each word in the array and check if isInteger, if it is, then store word in dictionary as a val, and the number as a key
    *  now loop over dictionary and concatenate every word into a sentence
    *  
    *  time complexity: O(n^2)
    *  space complexity: O(n) where n is the number of words in the sentence sentence?
    **/
      let tempWordsArr = words.split(' ')
      let wordsDict = []
      let wordsArr = tempWordsArr.map(word => word.split(''))
      for(let i = 0; i < wordsArr.length; i++){
        for(let j = 0; j < wordsArr[i].length; j++){
          if(Number.isInteger(parseInt(wordsArr[i][j]))){
          wordsDict[wordsArr[i][j] - 1] = wordsArr[i].join('')
        }
        }
      }
      let sentence = wordsDict.join(' ')
      return sentence
}
