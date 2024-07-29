const arr = [2, 4, 5, 3, 2, 9]

// Using two for loop 
// time complexity = O(n^2)
const twoSum1 = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
    return 'not found'
}

// Using hash map
// time complexity = O(n)
const twosum2 = (arr, target) => {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return [map.get(arr[i]), i]
        } else {
            map.set(target - arr[i], i)
        }
    }
    return 'not found'
}

// console.log("twoSum1 ==> ", twoSum1(arr, 21))
// console.log("twosum2 ==> ", twosum2(arr, 14))

const args = process.argv
console.log('args', args)