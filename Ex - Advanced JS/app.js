// 1
const data = [
    { name: 'Avi', age: 20 },
    { name: 'Ron', age: 30 },
    { name: 'Dana', age: 25 }
];

const filteredData = data.filter(person => person.age >= 22 && person.age <= 32);

const names = filteredData.map(person => person.name);
console.log("Names of people between 22 and 32 years old:", names);

const nameLengths = names.map(name => name.length);
console.log("Length of names:", nameLengths);
// 2
function findBiggestNumbersInRange(arr) {

    const biggestNumbers = arr.map(innerArray => Math.max(...innerArray));

    const numbersInRange = biggestNumbers.filter(num => num >= 15 && num <= 25);

    return numbersInRange;
}

const arrayOfArrays = [[1, 6, 3, 9], [6, 21, 5, 12], [4, 11, 23, 1]];

const result = findBiggestNumbersInRange(arrayOfArrays);
console.log("Biggest numbers between 15 and 25:", result);
// 3
function calculateAverageWithDelay(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = arr.reduce((total, num) => total + num, 0);
            const average = sum / arr.length;
            resolve(average);
        }, 1000);
    });
}

const inputArray = [1, 2, 3, 4, 5, 6];

calculateAverageWithDelay(inputArray)
    .then(average => {
        console.log("Average after 1 second:", average);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
// 4
function funcA(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const biggestNumbers = findBiggestNumbersInRange(arr);
            const totalSum = biggestNumbers.reduce((sum, num) => sum + num, 0);
            resolve(totalSum);
        }, 2000);
    });
}

async function funcB(arr) {
    try {
        const totalSum = await funcA(arr);
        return totalSum * 2;
    } catch (error) {
        console.error("Error occurred:", error);
        throw error;
    }
}

funcB(arrayOfArrays)
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error occurred in main code:", error);
    });