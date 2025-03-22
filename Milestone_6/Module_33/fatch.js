// const friend = {
//     name: "lal",
//     roll: 10,
//     age: 12,
//     class: "nine"
// }

// const friends = JSON.stringify(friend);
// console.log(friends);

// const newFriend = JSON.parse(friends);
// console.log(newFriend);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// const root = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res => res.json())
//         .then(data => {
//             user(data);
//         });
// }
// const user = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             admin(data);
//         });
// }
// const admin = (data) => {
//     console.log(data);
//     for(const da of data){
//         console.log(da.name);
//     }
// }

const main = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            roll(data);
        });
}
const roll = (data) => {

    const containerValue = document.getElementById('container');
    
    console.log(data);
    for(const all of data){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <h3>${all.title}</h3>
        <p>${all.body}</p>
        `;
        containerValue.appendChild(div);
    }
}

main();