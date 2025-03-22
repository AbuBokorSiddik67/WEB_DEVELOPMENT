
const fetchData = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await res.json();
    DisplayData(data.categories);
}
const DisplayData = (data) => {
    console.log(data);
    data.forEach(element => {
        console.log(element.id);
        showData(element);
    });
}
const showData = (show) => {
    const Container = document.getElementById("card");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("gap-5");
    div.innerHTML = `
    <button class="btn ">${show.category}</button>
    <h2>hello</h2>
    `;
    Container.appendChild(div);
}
fetchData();