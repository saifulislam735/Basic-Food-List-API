
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
                        lead-in to additional content. This content is a little bit longer.
                    </p>
                    <!-- Button trigger modal -->
                    <button onclick="modalDataGate(${food.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal"     data-bs-target="#staticBackdrop">
                        Details
                    </button>
                </div>
            </div>
        </div>
        `
        getDiv.appendChild(addDiv);
    }

}
const modalDataGate = (mealId) => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(mealUrl)
        .then(res => res.json())
        .then(data => modalDataUpdate(data.meals[0]));
}

const modalDataUpdate = (modalData) => {
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = modalData.strMeal;
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img src="${modalData.strMealThumb}" class="img-fluid" alt="">
    `;
    console.log(modalData);
}
const searchMeal = () => {
    const getSearch = document.getElementById('search-field').value;
    const getDiv = document.getElementById('mealsContainer');
    getDiv.innerText = ' ';
    loadData(getSearch)
}
loadData('fish');
