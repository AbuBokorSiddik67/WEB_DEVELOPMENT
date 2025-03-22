const friend = [
    { name: "hes", roll: 52452, age: 12 },
    { name: "has", roll: 52453, age: 13 },
    { name: "hes", roll: 52454, age: 14 },
    { name: "hhs", roll: 52455, age: 15 },
]

const hello = friend.map(p => {
    console.log(p.name);
});
console.log(hello);

localStorage.setItem("name", "si");
const re = localStorage.getItem("name");
console.log(re);
// *
// map();
// forEach();
// filter();
// find();
// localStorage();
// getItem(); 
// setItem();
// etc.....
// *