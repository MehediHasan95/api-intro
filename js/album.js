function loadData() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(album) {
  const albumContainer = document.getElementById("album");
  for (const elements of album) {
    const div = document.createElement("div");
    div.classList.add("album");
    div.innerHTML = `
    <h1>${elements.id}</h1>
    <p>${elements.title}</p>
    `;
    albumContainer.appendChild(div);
  }
}
