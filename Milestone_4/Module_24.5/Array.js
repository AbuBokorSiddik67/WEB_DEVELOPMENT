const phones = [
    { id: 1, name: 'phone', price: 21000 },
    { id: 2, name: 'phone', price: 20000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 2, name: 'Laptop', price: 20000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 2, name: 'Phone', price: 20000 },
];

function hello(phones, search) {
    let mached = [];
    for (const phon of phones) {
        if(phon.name.toLowerCase().includes(search.toLowerCase())) {
            mached.push(phon);
        }
    }
    console.log(mached);
}
hello(phones, 'laptop');
