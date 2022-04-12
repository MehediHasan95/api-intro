function loadData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
loadData();

function displayPhotos(photos) {
  const photContainer = document.getElementById("photo-container");
  for (const elements of photos) {
    const div = document.createElement("div");
    div.classList.add("photos");
    div.innerHTML = `
    <img src="${elements.url}"/>
    <h4>Title: ${elements.title}</h4>
    `;
    photContainer.appendChild(div);
  }
}
