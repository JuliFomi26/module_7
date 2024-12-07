function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    return uniqueNumbers.sort((a, b) => a - b);
}

const numbers = [7, 22,11, 6, 4, 3, 43, 7,4];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers);