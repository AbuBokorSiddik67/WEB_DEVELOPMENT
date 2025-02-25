console.log("hello world");

const jhanker = document.getElementById('section-first');
if (jhanker) {
    console.log(jhanker);
} else {
    console.error("Element with ID 'section-first' not found");
}

let main = document.getElementById('ii');
if (main) {
    let section = document.createElement('section');
    section.innerHTML = `
    <ul>
        <li>tomader</li>
        <li>amader</li>
        <li>tomer</li>
        <li>amr</li>
    </ul>
    `;
    main.appendChild(section);
    console.log(section);
} else {
    console.error("Element with ID 'ii' not found");
}