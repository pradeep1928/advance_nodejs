

function isPalindrom(str) {
    let re = /[^A-Za-z0-9_]/g
    str = str.toLowerCase().replace(re, '')
    let len = str.length
    for(let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}

// console.log("checkPalindrom ==> ", isPalindrom('racing'))

function canFormPalindrome (str) {
    const len = str.length;
    let palStrArr = []
    for (let start = 0; start < len; start++) {
        for (let end = start + 2; end <= len; end++) {
            const substring = str.slice(start, end);
            // console.log(substring)
            if (isPalindrom(substring)) {
                palStrArr.push(substring)
            }
        }
    }
    let maxpal = ''
    for (let i = 0; i < palStrArr.length; i++) {
        if (palStrArr[i].length > maxpal.length) {
            maxpal = palStrArr[i]
        }
    }
    return maxpal
}

function checkPalindrom(str) {
    if (isPalindrom(str)){
        return str
    } else if (canFormPalindrome(str)) {
        console.log(canFormPalindrome(str))
    } else {
        console.log('not a palindrome and can not form a palindrome')
    }
}

console.log("checkPalindrom ==> ", checkPalindrom('pradeeppd'))

// ------------------------- *** --------------------------------


function checkPalindrom(str) {
    let obj = {}
    let middleChar = ''
    let firstHalf = ''
    let palindrome = ''
    for (let char of str) {
        obj[char] = (obj[char] || 0 ) + 1
    }

    for (let [char, count] of Object.entries(obj)) {
        if (str.length % 2 === 0) {
            // if (count % 2 !== 0) {
            //     return 'given string can not be converted to palindrom'
            // }
            firstHalf += char.repeat(count / 2)
        } else {
            if (count % 2 === 1) {
                middleChar = char
                count -= 1
            } 
            firstHalf += char.repeat(count / 2)
        }
    }

     palindrome = firstHalf + middleChar + firstHalf.split('').reverse().join('');

    if (palindrome) {
        return palindrome
    }

    if (palindrome.length != str.length) {
        return 'given string can not be converted to palindrom with all characters'
    }
}


// console.log(checkPalindrom('pradeeppd'))   



