

/**
 * Sort an array in ascending  order.
 * Bubble sort algorithm.
 * If the current element is greater than the next element, swap them.
 * @param arr - The array to sort.
 * Big-O = O(n^2)
 */
function bubbleSort(arr) {
    let swapped 
    do {
        swapped  = false
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

let arr = [6,3,2,6,7,3,12,5,12,5]
let arr2 = [8, 6, 4, 3, 2, -2, -6]
bubbleSort(arr);
bubbleSort(arr2);
console.log("eg --> 1: ", arr)
console.log("eg --> 2: ", arr2)






/**
 * Sort an array in ascending  order.
 * Quick Sort Algorithm.
 * If the array is less than 2, return the array, otherwise, set the pivot to the last element in the
 * array, create two empty arrays, loop through the array and push the elements to the left array if
 * they are less than the pivot, otherwise, push them to the right array, then return the left array,
 * the pivot, and the right array.
 * @param arr - the array to be sorted
 * @returns sorted array such as: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 * Big - O 
   Worst case: O(n^2) - when array is already sorted.
   Average case: O(nlogn)
 */
   function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    console.log('pivot' , pivot)
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

let newarr = [11, 9, 6, 4, 1, -2, -5];
let newarr2 = [1, 2, 3, 4, 5, 6];
let newarr3 = [9, 7, 5, 3, 1, -1];

console.log("eg --> 1: ", quickSort(newarr));
console.log("eg --> 2: ", quickSort(newarr2));
console.log("eg --> 3: ", quickSort(newarr3));

