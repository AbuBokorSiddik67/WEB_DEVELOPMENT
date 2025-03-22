
//? >>> Task_1 Solved.........

const fruit = ['apple', 'banana', 'orange', 'mango', 'banana', 'apple', 'mango', 'orange', 'apple', 'apple', 'banana', 'mango', 'stobarry', 'painapal'];

// Here count fruit.
let appleCount = 0;
let bananaCount = 0;
let orangeCount = 0;
let mangoCount = 0;
// Here search fruit.
for (const fut of fruit) {
    if (fut == "apple") {
        appleCount = appleCount + 1;
    }
    else if (fut === "banana") {
        bananaCount++;
    }
    else if (fut === "orange") {
        orangeCount++;
    }
    else if (fut === "mango") {
        mangoCount++;
    }
    else {
        console.log("ai fol ti ai jurir na. vul kore cola asce!!: "+fut);
    }
}
// Here print fruit.
console.log("Here apple is: ",appleCount);
console.log("Here banana is: ",bananaCount);
console.log("Here orange is: ",orangeCount);
console.log("Here mango is: ",mangoCount);