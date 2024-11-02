//task 1
const massive = [1, 5, 3];
massive[1] = 10;
console.log(massive);
//task 2
const strings = ["Monday", "Tuesday", "Wednesday"];
strings[3] = "Thursday";
console.log(strings);
//task 3
const number = [2, 10, 15];
const sum = number[0] + number[1] + number[2];
console.log(sum);
//task 4
const cycle = [4, 2, 5, 6, 8];
let total = 0;
for (let i = 0; i < cycle.length; i++) {
    total +=  cycle[i];
    console.log(cycle[i]);
}
//task 5
const massStrings = ["fish", "computer", "butter", "key", "fishing"];
for (let i = 0; i < massStrings.length; i++) {
    if  (massStrings[i].length > 5) {
        console.log(massStrings[i]);
}
}
//task 6
const numbers = [56, 2, 78, 12, 45, 7, 9, 27, 99, 3];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
}
}
console.log(max);
//task 7
let numbersEven = [1, 2, 3, 4,  5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersEven.length; i++) {
    if (numbersEven[i] % 2 === 0) {
        console.log(numbersEven[i]);
}
}

