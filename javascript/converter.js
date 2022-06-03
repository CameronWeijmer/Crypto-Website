let coins = [];
const select = document.getElementById("selectCurrencies");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
  .then((res) => res.json())
  .then((data) => {
    // select.innerHTML = "";
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
  const select = document.getElementById("selectCurrencies");
  const input = document.getElementById("input");
  const option = select.options[select.selectedIndex];
  const coinId = option.value;
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let coin_price = data[coinId].usd;
      let amount = parseInt(document.getElementById("input").value);
      const result = amount / coin_price;
      const resultText = document.getElementById("answer");
      resultText.innerText = result;
      const showBox = document.getElementById("result");
      showBox.style.visibility = "visible";
    });

  debugger;
  if (input.value.length == 0 || !select.value) {
    const fail = "Please fill out all of the Boxes...";
    const resultText = document.getElementById("answer");
    resultText.innerText = fail;
  }
}
