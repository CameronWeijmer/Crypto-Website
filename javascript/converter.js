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

// Calculates currency
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
      const resultText = document.getElementById("answer");
      resultText.innerText = err;
    });

  // Validation
  if (
    input.value.length == 0 ||
    select.value.length == 0 ||
    currency.value.length == 0
  ) {
    const fail = "Please fill out all of the Boxes...";
    const resultText = document.getElementById("answer");
    resultText.innerText = fail;
  }
}

let menuList = document.getElementById("menuList");
const content_block = document.getElementById("content_block");
const body = document.getElementById("body");

menuList.style.maxHeight = "0px";

// Function to toggle the menulist
function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "500px";
    menuList.style.visibility = "visible";
    content_block.style.visibility = "hidden";
    body.style.backgroundImage = "url('assets/background_mobile.png')";
    body.style.backgroundPosition = "center";
    body.style.backgroundPositionX = "70%";
    body.style.backgroundPositionY = "15px";
    body.style.backgroundRepeat = "no-repeat";
  } else {
    content_block.style.visibility = "visible";
    menuList.style.visibility = "hidden";
    menuList.style.maxHeight = "0px";
  }
}
