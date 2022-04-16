const searchFood = () => {
  const searchField = document.getElementById("search-input");
  const foodContainer = document.getElementById("food-container");
  if (searchField.value == "") {
    alert("Search something");
  } else {
    foodName(searchField.value);
    searchField.value = "";
    foodContainer.textContent = "";
  }
};

const foodName = (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => foodDetails(data.meals));
};

const foodDetails = (details) => {
  if (details == null) {
    alert("message");
  } else {
    details.forEach((elements) => {
      const foodContainer = document.getElementById("food-container");
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="${
                  elements.strMealThumb
                }" class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">${elements.strMeal}</h5>
                <p class="card-text">
                    ${elements.strInstructions.slice(0, 100)}
                </p>
            </div>
            </div>
        </div>
        `;
      foodContainer.appendChild(div);
    });
  }
};
