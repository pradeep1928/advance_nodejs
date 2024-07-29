// forEach array polyfill.

let arr = [1, 2, 5, 6, 8, 19, 10]

Array.prototype.myforEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

// Polyfill of map() method.

Array.prototype.myMap = function (callback) {
    let output = []
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this))
    }
    return output
}

// console.log('myMap ==> ', arr.myMap((val) => val * 2))

// Polyfill of filter() method.
Array.prototype.myFilter = function (callback) {
    let output = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            output.push(this[i])
        }
    }
    return output
}

// console.log('myFilter ==> ', arr.myFilter((val) => val % 2 !== 0))


// Polyfill for find() function 

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

// console.log('myFind ==> ', arr.myFind((val) => val > 8))

// Polyfill of reduce() method
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue  
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

// console.log('myReduce ==> ', arr.myReduce((acc, val) => acc + val, 0))

// Polyfill of every() method.
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false
        }
    }
    return true
}

console.log('myEvery ==> ', arr.myEvery((val) => val < 10))


// Polyfill of some() method. 

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true
        }
    }
    return false
}

console.log('mySome ==> ', arr.mySome((val) => val < 10))
