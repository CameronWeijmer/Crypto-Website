let coins = [];
const select = document.getElementById("selectCurrencies");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
  .then((res) => res.json())
  .then((data) => {
    select.innerHTML = "";
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
  document.getElementById("coin_name").innerText = option.text;
}
