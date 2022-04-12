function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(posts) {
  const postContainer = document.getElementById("post-container");
  for (const elements of posts) {
    const div = document.createElement("div");
    div.classList.add("posts");
    div.innerHTML = `
    <h1>${elements.id}</h1>
    <h3>Title: ${elements.title}</h3>
    <p>${elements.body}</p>
    `;
    postContainer.appendChild(div);
  }
}
