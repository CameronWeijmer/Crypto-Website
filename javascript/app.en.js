let btc = document.getElementById("bitcoin_price");

fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.bitcoin.usd);
    btc.innerText = "$" + data.bitcoin.usd;
  })
  .catch((err) => {
    console.error(err);
    alert(
      "At the moment we are not able to display the Bitcoin price, please be patient."
    );
  });