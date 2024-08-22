const a = [2]
a[0] = [1]

// console.log('a',  a)

const user1 = {
    name: 'pradeep',
    address: {
        city: 'pune'
    }
}

// let user2 = structuredClone(user1)
// let user2 = JSON.parse(JSON.stringify((user1)))
// let user2 = Object.create(user1)
let user2 = Object.create(user1)
user2.address.city = 'mumbai'
user2.name = 'padmukhi'
console.log('user1', user1.address.city)
console.log('user2', user2.address.city)
// console.log('user1', user1.name)
// console.log('user2', user2.name)
console.log('user1', user1)
console.log('user2', user2)

// Create a prototype object
const person = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// Create a new object that inherits from the person prototype
const john = Object.create(person);
john.name = 'John';
// john.greet();  // Output: Hello, my name is John.
// console.log(john)
