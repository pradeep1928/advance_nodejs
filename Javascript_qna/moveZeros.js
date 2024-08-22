
function moveZerosToLeft(arr) {
    let zeroCount = 0;
    
    // Count the number of zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }
    
    // Create a new array with zeros at the beginning
    let result = new Array(zeroCount).fill(0);
    
    // Add non-zero elements to the array after the zeros
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// Example usage
const arr = [1, 0, 2, 0, 3, 4, 0, 5];
const result = moveZerosToLeft(arr);
console.log(result); // Output: [0, 0, 0, 1, 2, 3, 4, 5]


// ============================== *** ================================ 

function moveZerosToRight(arr) {
    let nonZeroIndex = 0;
    
    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    
    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    
    return arr;
}

// Example usage
const arr2 = [1, 0, 2, 0, 3, 4, 0, 5];
moveZerosToRight(arr2);
console.log(arr2); // Output: [1, 2, 3, 4, 5, 0, 0, 0]
