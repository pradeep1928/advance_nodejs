

/**
 * Binary Search Algorithm.
 * Given array should be sorted.
 * If the target is less than the middle index, search the left half of the array, otherwise search the
 * right half of the array.
 * @param arr - the array we're searching through
 * @param target - the value we're looking for
 * @returns The index of the target value in the array.
 * Big-O = O(logn)
 */
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target == arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return - 1
}

console.log("eg - 1: ", binarySearch([1,2,3,4,5], 3));
console.log("eg - 2: ", binarySearch([-3, 0, 4, 6, 9], 6));
console.log("eg - 3: ", binarySearch([-5, -3, 3, 6, 8], 9));

