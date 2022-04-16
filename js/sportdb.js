const loadData = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then((res) => res.json())
    .then((data) => displayData(data.sports));
};
loadData();

const displayData = (sports) => {
  for (const elements of sports) {
    console.log(elements);
    // const objProperty = Object.keys(elements);
    // const objPropertyvalues = Object.values(elements);
    const allSports = document.getElementById("all-sports");
    const div = document.createElement("div");
    div.classList.add("border", "p-3", "m-5");
    div.innerHTML = `
    <h2>${elements.idSport}</h2>
    <h3>${elements.strSport}</h3>
    <img src="${elements.strSportThumb}" />
    <p>${elements.strSportDescription}</p>
    `;
    allSports.appendChild(div);
  }
};
