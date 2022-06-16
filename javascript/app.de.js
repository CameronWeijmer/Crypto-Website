let btc = document.getElementById("bitcoin_price");

// gets bitcoin price in euro
fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data.bitcoin.chf);
    btc.innerText = "EUR " + data.bitcoin.eur;
  })
  .catch((err) => {
    console.error(err);
    alert(
      "At the moment we are not able to display the Bitcoin price, please be patient."
    );
  });
