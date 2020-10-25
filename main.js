const dataBox = document.querySelector(".dataBox");

async function fetchApi (url) {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });

    const data = await dataFetch.json();
    return data;
}

function generateCoins (dataAll) {
    dataAll.data.coins.forEach(coin => {
        const coinInd = document.createElement("div");
        coinInd.classList.add("coins");
        coinInd.innerHTML = `
            <div class="coinSingle">
                <div class="info py-6">
                    <img src="${coin.iconUrl}" width="100px" class="pb-4">
                    <h4><span>${coin.name.toUpperCase()}</span> :: <span>${parseFloat(coin.price).toFixed(3)}</span> USD.</h4>
                </div>
            </div>
        `;

        dataBox.appendChild(coinInd);
    });
}

fetchApi("https://api.coinranking.com/v1/public/coins").then((dataAll) => {
    generateCoins(dataAll);
});