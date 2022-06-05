let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let apiKey = "coinranking4631015331570a2b80854ae86b90f47ec74781ca0d5b0927";

let apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": `${apiKey}`,
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var coinlist = "";
        }

        coinsData.forEach((coin) => {
          coinlist += "<tr>";
          coinlist += `<td id="coin_name"> ${coin.name}</td>`;
          coinlist += `<td> $${parseFloat(coin.price).toFixed(3)}</td>`;
          coinlist += `<td> $${coin.marketCap} </td>`;
          coinlist += `<td> ${coin["24hVolume"]} </td>`;
          coinlist += `<td> ${coin.symbol} </td>`;
          coinlist += `<td> ${coin.rank} </td>`;
        });
        document.getElementById("content").innerHTML = coinlist;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
