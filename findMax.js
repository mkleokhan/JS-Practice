/**
 Write a function that takes an array as an input and returns the maximum number in the array and its index
 *  */

function findMax(arr) {

    let max = 0;
    let index = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i]
            index = i
        }

    }

    return [max, index]
}

const exampleArray = [4, 2, 8, 6, 4, 1, 7, 6000000, , 3, 2, 9, 100, 234, 34235,];

console.log(findMax(exampleArray))

