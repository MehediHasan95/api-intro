function loadData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
}

loadData();

function displayProducts(products) {
  const productContainer = document.getElementById("product-container");
  for (const elements of products) {
    const div = document.createElement("div");
    div.classList.add("products");
    div.innerHTML = `
    <div class="card"">
            <img src="${elements.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-text">${elements.title}</h4>
        </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: ${elements.price}$</li>
        <li class="list-group-item">Category: ${elements.category}</li>
  </ul>
    </div>
    `;
    productContainer.appendChild(div);
  }
}
