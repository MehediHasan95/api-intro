const loadRandomData = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => displayRandomUsers(data));
};
loadRandomData();

const displayRandomUsers = (users) => {
  const section = document.getElementById("user-container");
  const randomusers = users.results;
  console.log(randomusers);
  for (const elements of randomusers) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${elements.picture.medium}" />
    <h4>Name: ${elements.name.title} ${elements.name.first} ${elements.name.last}</h4>
    <h5>Gender: ${elements.gender}</h5>
    <h6>Country: ${elements.location.country}</h6>
    `;
    section.appendChild(div);
  }
};
