// Write a function for infinite currying 

// Currying function 
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

// given add function 
console.log(add(2)(4)(4)())




// second question 
const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    substract(a) {
        this.total -= a;
        return this;
    }
}

// Write the function for following code to give appropriate ans 
const result = calc.add(5).multiply(4).substract(5).add(5).substract(10);
console.log(result.total)

