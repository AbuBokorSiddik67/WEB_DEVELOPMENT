
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments/1',
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://jsonplaceholder.typicode.com/users/1'
];

Promise.all(urls.map(url => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
}))
    .then(res => res)
    .then(data => console.log(data))
    .catch(error => console.log(error));

    
 

    
