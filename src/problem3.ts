{
  /*
Create a TypeScript function called countWordOccurrences 
that accepts a sentence (string) and a word (string). 
The function should return the number of times the word
appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
*/
    
    const countWordOccurences = (sentence: string, word: string): number => {
        const lowerCaseSentence = sentence.toLowerCase()
        const lowerCaseWord = word.toLowerCase()
        const splitSentence = lowerCaseSentence.split(" ")
        const filterWordAndCount = splitSentence.filter(word => word === lowerCaseWord).length
        
        return filterWordAndCount
        
    }
    
}