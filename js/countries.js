const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (country) => {
  const ul = document.getElementById("country-list");
  country.forEach((elements) => {
    console.log(elements);
    const li = document.createElement("li");
    li.innerHTML = `
   <li><h4>${elements.name.common} <a onclick="searchCountryByName('${elements.name.common}')" href='#'>details</a></h4> </li>
   `;
    ul.appendChild(li);
  });
};

const searchCountryByName = (countryName) => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (details) => {
  const section = document.getElementById("details");
  const div = document.createElement("div");
  div.classList.add("details");
  div.innerHTML = `
  <img src="${details.flags.png}"/>
  <h4>Official Name: ${details.name.official}</h4>
  <p>Capital: ${details.capital[0]}</p>
  `;
  section.appendChild(div);
};
