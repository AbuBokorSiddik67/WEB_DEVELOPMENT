console.log("hello world");

const jhanker = document.getElementById('section-first');
console.log(jhanker);

let main = document.getElementsByTagName('body')[0]; // Corrected to access the first body element
let section = document.createElement('section');
section.innerHTML = `
<ul>
    <li>tomader</li>
    <li>amader</li>
    <li>tomer</li>
    <li>amr</li>
    </ul>
`;
main.appendChild(section); // Correctly append the section to the body element

console.log(section);