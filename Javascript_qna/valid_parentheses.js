

// Valid Parentheses

// This code will work for string with only parenthese
function isValidParentheses(str) {
    let stack = [];
    const characters = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (const char of str) {
        if (!characters[char]) {
            stack.push(char)
        } else if (stack.pop() !== characters[char]) {
            return false
        }
    }
    return stack.length === 0
}

let str = '(){}[]'
let str2 = '({[]})'
let str3 = '()({}{))('
let str4 = '(){}[]({})[]'
// console.log(isValidParentheses(str))
// console.log(isValidParentheses(str2))
// console.log(isValidParentheses(str3))
// console.log(isValidParentheses(str4))


// =========================== *** ===========================

// This code will work all characters in string with brackets 
function isValidBrackets(str) {
    let stack = []
    let matchPair = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (const char of str) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char)
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchPair[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

let newstr = '(){}[]'
let newstr2 = '({[]})'
let newstr3 = '()({}{))())'
let newstr4 = '(){}[]({})[]'
let newstr5 = 'dsd(sd)df{ds}[]'

console.log('isValidBrackets ==> ', isValidBrackets(newstr))
console.log('isValidBrackets ==> ', isValidBrackets(newstr2))
console.log('isValidBrackets ==> ', isValidBrackets(newstr3))
console.log('isValidBrackets ==> ', isValidBrackets(newstr4))
console.log('isValidBrackets ==> ', isValidBrackets(newstr5))