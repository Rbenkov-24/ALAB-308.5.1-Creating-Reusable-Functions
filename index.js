//--------------Part 1: Thinking Functionally--------


//Take an array of numbers and return the sum.
function sumArray(numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
    
}

//Take an array of numbers and return the average.
function averageArray(numbers){
    if (numbers.length === 0) return 0;
    let total = sumArray(numbers);
    return total / numbers.length;
}

//Take an array of strings and return the longest string.
function longestString(strings){
    let longest = "";
    for (let i = 0; i < strings.length; i++){
        if (strings[i].length > longest.length){
            longest = strings[i];
        }
    }
    return longest;
}

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function stringsLongerThan(strings, length) {
    let result = [];
    for (let i = 0; i < strings.length; i++){
        if (strings[i].length > length){
            result.push(strings[i]);
        }
    }
    return result;
}

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n) {
    function printRange(current){
        if (current > n) return;
        console.log(current);
        printRange(current + 1);
    }
    printRange(1);
}
console.log("Sum of array:", sumArray([1, 2, 3]));
console.log("Average of array:", averageArray([1, 2, 3]));
console.log("Longest string:", longestString(['red', 'blue', 'yellow', 'green', 'purple']));
console.log("Strings longert than 4:", stringsLongerThan(['red', 'blue', 'yellow', 'green', 'purple'], 4));
printNumbers(5);


