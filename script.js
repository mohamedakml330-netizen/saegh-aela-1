const API_URL = "https://proud-limit-a1c4.mohamedakml330.workers.dev/";

function formatPrice(value) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

async function loadGold() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById("g24buy").textContent = formatPrice(data.gold24.buy) + " EGP";
    document.getElementById("g24sell").textContent = formatPrice(data.gold24.sell) + " EGP";

    document.getElementById("g21buy").textContent = formatPrice(data.gold21.buy) + " EGP";
    document.getElementById("g21sell").textContent = formatPrice(data.gold21.sell) + " EGP";

    document.getElementById("g18buy").textContent = formatPrice(data.gold18.buy) + " EGP";
    document.getElementById("g18sell").textContent = formatPrice(data.gold18.sell) + " EGP";

    document.getElementById("g14buy").textContent = formatPrice(data.gold14.buy) + " EGP";
    document.getElementById("g14sell").textContent = formatPrice(data.gold14.sell) + " EGP";

    document.getElementById("coinbuy").textContent =
      formatPrice(data.coin) + " EGP";

    document.getElementById("ouncebuy").textContent =
      formatPrice(data.ounce) + " EGP";

    document.getElementById("kilobuy").textContent =
      formatPrice(data.gold24.buy * 1000) + " EGP";

    document.getElementById("screenprice").textContent =
      formatPrice(data.screen) + " USD";

    document.querySelector(".update").textContent =
      "🔄 Last Update: " + data.updated;

  } catch (err) {
    console.error(err);

    document.querySelectorAll(".price").forEach(e => e.textContent = "Error");
    document.querySelectorAll(".box p").forEach(e => e.textContent = "Error");
  }
}

loadGold();
setInterval(loadGold, 60000);
