const searchMeal = () => {
    const getSearch = document.getElementById('search-field').value;
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getSearch}`;
    // console.log(url)
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data=>loadData(data))
    const getDiv = document.getElementById('mealsContainer');
    getDiv.innerText = ' ';
    loadData(getSearch)

}
const loadData = (foodName) => {
    // console.log(foodName)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getTheData(data.meals));
}
const getTheData = (foods) => {
    for (const food of foods) {
        // console.log(food)
        const getDiv = document.getElementById('mealsContainer');
        const addDiv = document.createElement('div');
        addDiv.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        `
        getDiv.appendChild(addDiv);
    }

}
loadData('fish');
