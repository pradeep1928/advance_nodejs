const a = [2]
a[0] = [1]

// console.log('a',  a)

const user1 = {
    address: {
        city: 'pune'
    }
}

// let user2 = structuredClone(user1)
let user2 = JSON.parse(JSON.stringify((user1)))
user2.address.city = 'mumbai'
console.log('user1', user1.address.city)
console.log('user2', user2.address.city)