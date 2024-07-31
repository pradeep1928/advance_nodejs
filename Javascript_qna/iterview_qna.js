//  Q1. flatten the array 

const flatten1 = (arr, flatArr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten1(arr[i], flatArr)
        } else {
            flatArr.push(arr[i])
        }

    }
    return flatArr
}

const flatten2 = (arr) => {
    return arr.flat(Infinity)
}

// const flatten3 = (arr) => {
//     return arr.reduce((acc, val) => {
//         if (Array.isArray(val)) {
//             return acc.concat(flatten3(val))
//         } else {
//             return acc.concat(val)
//         }
//     }, [])
// }

let arr = [1, 3, [2, 4, [5, 9]], 9, [0, 8]]
// console.log("flatten1", flatten1(arr, []));
// console.log("flatten2", flatten2(arr, []));
// console.log("flatten3", flatten3(arr, []));

// =================================== *** ============================================

// Q2. Memoisation 
const cache1 = new Map();
// const memoize1 = (fn) => {
//     return function (...args) {
//         let key = args.join(' ');
//         if (cache1.has(key)) {
//             console.log("from cache1");
//             return cache1.get(key);
//         } else {
//             let result = fn.apply(this, args);
//             // let result = fn(...args)
//             cache1.set(key, result);
//             return result;
//         }
//     }
// }

// const cache2 = Object.create(null);
// const memoize2 = (fn) => {
//     console.log("🚀 ~ cache2:", cache2)
//     return function (...args) {
//         const key = args.join(' ');
//         return cache2[key] || (cache2[key] = fn.apply(this, args));
//     }
// }


/**
 * The function calculates the Fibonacci sequence recursively.
 * @param n - The parameter `n` in the `fib` function represents the position of the Fibonacci number
 * in the sequence that we want to calculate. For example, if `n` is 5, it means we want to find the
 * 5th Fibonacci number in the sequence.
 * @returns The function `fib` is a recursive function that calculates the Fibonacci sequence. It
 * returns the nth Fibonacci number for the input value `n`.
 */
// const fib = (n) => {
//     if (n < 2) {
//         return n
//     } else {
//         return fib(n - 1) + fib(n - 2)
//     }
// }

// Print fibonacci series upto n numbers.
// const printFibonacci = (n) => {
//     for (let i = 0; i <= n; i++) {
//         console.log(fib(i));
//     }
// }

// const printFibonacci2 = (n) => {
//     let fibarr = []
//     let n1 = 0, n2 = 1, nextTerm
//     for (let i = 1; i <= n; i++) {
//         fibarr.push(n1)
//         // console.log(n1)
//         nextTerm = n1 + n2
//         n1 = n2
//         n2 = nextTerm
//     }
//     return fibarr
// }
// console.log("🚀 ~ printFibonacci2 ~ printFibonacci2:", printFibonacci2(9))
// console.log("🚀 ~ printFibonacci ~ printFibonacci:", printFibonacci(10))

// console.log(memoize2(fib)(10));
// console.log(memoize2(fib)(10));
// console.log(memoize2(fib)(6));
// console.log(memoize2(fib)(6));
// console.log(memoize2(fib)(6));
// console.log(memoize2(fib)(8));
// console.log(memoize2(fib)(8));


// =================================== *** ============================================

// Q3. Prime numbers 
// List all prime numbers within given number
const isPrime = (n) => {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


// console.log('isPrime ==> ', isPrime(25))
const findAllPrimes = (input) => {
    let primeArry = []
    if (Array.isArray(input)) return input.filter(isPrime)
    for (let i = 2; i <= input; i++) {
        if (isPrime(i)) {
            primeArry.push(i)
        }
    }
    return primeArry
}

// console.log(findAllPrimes([2, 3, 5, 7, 9, 10, 11, 13]))
// console.log(findAllPrimes(100))


// =================================== *** ============================================
// Q4. Find the first duplicate in an array
const findFirstDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return -1
}


// =================================== *** ============================================
// Q5. Rotate the string with given times of number.
const rotateString = (str, n, side) => {
    if (side === 'right') {
        return str.slice(n) + str.slice(0, n)
    } else {
        return str.slice(-n) + str.slice(0, -n)
    }
}

console.log('rotateString ==> ', rotateString('pradeep', 2, 'left'))