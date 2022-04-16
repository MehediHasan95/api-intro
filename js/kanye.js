const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = quote.quote;
  ul.appendChild(li);
};
