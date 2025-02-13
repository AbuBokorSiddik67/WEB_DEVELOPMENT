// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    return result;
}
const result = multiply(2, 5, 3, 4);
console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOdd(num1) {
    if (num1 % 2 === 1) {
        const result = num1 * 2;
        return result;
    }
    else {
        const result = num1 / 2;
        return result;
    }
}

const final = evenOdd(7);
console.log("The final result is :", final);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
console.log("----------------------------------");
let sum = 0;
let avg = 0;
function make_avg(array) {
    for (let number of array) {
        sum = sum + number;
        avg = (sum / array.length)
    }
    console.log("total:", sum);
    console.log("array length:", array.length);
    return avg;
}
let num = make_avg([20, 21, 25, 45, 445, 4]);
console.log("Average number: ", num);
console.log("----------------------------------");
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

let count = 0;
function count_zero(binaryString) {
    // console.log(binaryString.length);

    for (let i = 0; i <= binaryString.length; i++) {
        if (binaryString[i] === '0') {
            count++;
        }
    }
    return count;
}

let count1 = count_zero("010101");
console.log("The available binary 0 is:",count1);