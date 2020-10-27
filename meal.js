const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById("main");
const api = "";

const url = (food) => `https://api.edamam.com/search?q=${food}&app_id=647764ae&app_key=39d04603bd5dd5c063fdfce93cc973de`


async function getRecipe(food) {
    const resp = await fetch(url(food));
    const respData = await resp.json();
    main.innerHTML = "";
    respData.hits.forEach(item => {
        const itemEl = document.createElement("a");
        itemEl.classList.add("itemEl");
        console.log(item.recipe);
        itemEl.innerHTML = `<div class = "image">
        <img src = "${item.recipe.image}"/>
        <div id="title">
           <div class = "header">
                    <p id="label">${item.recipe.label}</p>
                    <p id="cal">Calories: ${item.recipe.calories.toFixed(2)}</p>
                    <p id="hlabel">Health Label: ${item.recipe.healthLabels}</p>
           </div>   
           <div class = "link">
                    <a href = "${item.recipe.url}">View Recipe</a>
           </div>  
        </div>
        </div>`;
        main.appendChild(itemEl);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const food = search.value;
    getRecipe(food);
    document.getElementById('form').reset();

})