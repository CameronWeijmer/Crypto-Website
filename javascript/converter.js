let coins = [];
const select = document.getElementById("selectCurrencies");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((coin) => {
      const option = document.createElement("option");
      option.value = coin.id;
      option.innerText = coin.name;
      select.appendChild(option);
      coins.push(coin);
    });
    return coins;
  });

// Gets name of selected currency
function currname() {
  const select = document.getElementById("selectCurrencies");
  const option = select.options[select.selectedIndex];
  document.getElementById("coin_name").innerText = " to " + option.text;
}

function calc() {
  const getText = document.getElementById("curreny").value;
  let currency = getText.toLowerCase();
  const select = document.getElementById("selectCurrencies");
  const input = document.getElementById("input");
  const option = select.options[select.selectedIndex];
  const coinId = option.value;
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let coin_price = data[coinId][currency];
      let amount = parseInt(document.getElementById("input").value);
      const result = amount / coin_price;
      const resultText = document.getElementById("answer");
      if (coinId == "bitcoin") {
        resultText.innerText = result.toFixed(6) + " " + coinId.toUpperCase();
      } else {
        resultText.innerText = result.toFixed(4) + " " + coinId.toUpperCase();
      }
      const showBox = document.getElementById("result");
      showBox.style.visibility = "visible";
    })
    .catch((err) => {
      const fail = "Unknown Error, please try again";
      const resultText = document.getElementById("answer");
      resultText.innerText = err;
    });

  if (input.value.length == 0 || !select.value || !currency.value.length) {
    const fail = "Please fill out all of the Boxes...";
    const resultText = document.getElementById("answer");
    resultText.innerText = fail;
  }
}
