{
/*
Create a TypeScript function removeDuplicates that accepts
an array of numbers and returns a new array with duplicates
removed. Preserve the original order of elements.
// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])
// Sample Output:
[1, 2, 3, 4, 5]
*/
    
    type ArrayOfNumbers = number[]
    
    const removeDuplicates = (arr: ArrayOfNumbers): number[] => {
        const removeDuplicateNumber = arr.filter((value, index) => arr.indexOf(value) === index)
        return removeDuplicateNumber
    }

    // console.log(removeDuplicates([1,1,2,3,4,4,45,7,8]));
}