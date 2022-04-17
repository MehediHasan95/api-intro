const loadData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};
loadData();

const displayData = (meals) => {
  if (!meals) {
    alert("Not found any things");
  } else {
    const mealsContainer = document.getElementById("meals");
    mealsContainer.textContent = "";
    meals?.forEach((element) => {
      console.log(element);
      const div = document.createElement("div");
      div.classList.add("border", "m-3", "p-3", "bg-Secondary", "text-white");
      div.innerHTML = `
      <img class="w-25" src="${element.strMealThumb}" />
      <h3>Name: ${element.strMeal}</h3>
      <h6>Category: ${element.strCategory}</h6>
      <h6>Country: ${element.strArea}</h6>
      <h6>Drink: ${
        element.strDrinkAlternate ? element.strDrinkAlternate : "Not Available"
      }</h6>
      `;
      mealsContainer.appendChild(div);
    });
  }
  toggleSpinner("none", "block");
};

const searchMeals = () => {
  const searchField = document.getElementById("search-field").value;
  toggleSpinner("block", "none");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};

// Toggle spinner
const toggleSpinner = (spin, result) => {
  document.getElementById("troggle-spinner").style.display = spin;
  document.getElementById("meals").style.display = result;
};
