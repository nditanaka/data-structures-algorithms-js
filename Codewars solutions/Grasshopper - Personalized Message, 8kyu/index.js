/**
 * https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 * Use conditionals to return the proper message:
 * case:	
 * 1. name equals owner -> return 'Hello boss'
 * 2. otherwise -> return 'Hello guest'
 * @param {*} name 
 * @param {*} owner 
 * @returns 
 */

function greet (name, owner) {
    switch(name){
        case owner:
        return `Hello boss`
        default:
        return `Hello guest`
    }
  }