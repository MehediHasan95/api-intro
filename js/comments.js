function loadData() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComments(data));
}

function displayComments(comments) {
  const commentContainer = document.getElementById("comment-container");

  for (const elements of comments) {
    const div = document.createElement("div");
    div.classList.add("comments");
    div.innerHTML = `
    <h2>Name: ${elements.name}</h2>
    <h5>E-mail: ${elements.email}</h5>
    <p>${elements.body}</p>
    `;
    commentContainer.appendChild(div);
  }
}
