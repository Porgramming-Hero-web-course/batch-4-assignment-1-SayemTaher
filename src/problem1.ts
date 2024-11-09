{/*
Write a TypeScript function sumArray that takes an array of numbers and
returns the sum of all elements in the array.

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
*/

    type ArrayOfNumbers = number[]

    const sumArray = (arr: ArrayOfNumbers): number => {
        // using for loop 
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]

        }
        return sum
        // using reduce method
        // const sumOfNumbers = arr.reduce(( acc,num) =>  acc + num)
        // return sumOfNumbers
    }
}