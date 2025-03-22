// Category Section Start
function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
}
function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");
    for (let cat of categories) {
        // console.log(cat);
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick='loadData("${cat.category_id}")' class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    }
}
// Category Section End.
// Video Section Start
function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos));
    
    return;
}
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";

    if (videos.length == 0) {
        videoContainer.innerHTML = `
        <div class="col-span-full py-20 space-y-4 flex flex-col justify-center items-center">
			<img class="w-[100px]" src="./assets/Icon.png" alt="">
			<p class="text-2xl font-bold">Ops, No Content Here !!!</p>
		</div>
        `;
        return;
    }
    videos.forEach(video => {
        // console.log(video);
        const videoDiv = document.createElement("div");
        videoDiv.innerHTML = `
        <div class="card bg-base-100">
            <figure>
                <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
            </figure>
            <div class="py-2">
                <div class="flex items-center gap-2">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <h2 class="card-title font-semibold text-[16px]">${video.title}</h2>
                </div>
                <div class="flex gap-1">
                    <p class="text-[14px] pl-8 gap-2">${video.authors[0].profile_name}</p>  
                    <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000">
                </div>
                <div class="pl-8 gap-2">
                    <p class="text-[14px]">${video.others.views} Views</p>
                </div>
            </div>
        </div>
        `;
        videoContainer.appendChild(videoDiv);
    });
    
}
// Video Section End.
// SearchData Start
const loadData = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            // Remove active class from all buttons
            const allButtons = document.querySelectorAll(".btn");
            allButtons.forEach(data => {
                data.classList.remove("active");
                AddBg();
            })
            // Add active class to the clicked button
            const clickedButton = document.getElementById(`btn-${id}`);
            clickedButton.classList.add("active");
            displayVideos(data.category);
        });
}

// Active And Remove Red BG Start
const removeB = () => {
    const All = document.getElementById("all");
    All.classList.remove("active");
}
const AddBg = () => {
    const All = document.getElementById("all");
    All.classList.add("active");
}
// Active And Remove Red BG End.
loadCategories();
