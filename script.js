const API_URL = "https://proud-limit-a1c4.mohamedakml330.workers.dev/";

async function loadGold() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    document.getElementById("g24buy").textContent = data.gold24.buy.toLocaleString("ar-EG") + " ج";
    document.getElementById("g24sell").textContent = data.gold24.sell.toLocaleString("ar-EG") + " ج";

    document.getElementById("g21buy").textContent = data.gold21.buy.toLocaleString("ar-EG") + " ج";
    document.getElementById("g21sell").textContent = data.gold21.sell.toLocaleString("ar-EG") + " ج";

    document.getElementById("g18buy").textContent = data.gold18.buy.toLocaleString("ar-EG") + " ج";
    document.getElementById("g18sell").textContent = data.gold18.sell.toLocaleString("ar-EG") + " ج";

    document.getElementById("g14buy").textContent = data.gold14.buy.toLocaleString("ar-EG") + " ج";
    document.getElementById("g14sell").textContent = data.gold14.sell.toLocaleString("ar-EG") + " ج";

    document.getElementById("coinbuy").textContent =
      data.coin.toLocaleString("ar-EG") + " ج";

    document.getElementById("ouncebuy").textContent =
      data.ounce.toLocaleString("ar-EG") + " ج";

    document.getElementById("kilobuy").textContent =
      (data.gold24.buy * 1000).toLocaleString("ar-EG") + " ج";

    document.getElementById("screenprice").textContent =
      data.screen.toLocaleString("ar-EG") + " $";

    document.querySelector(".update").innerHTML =
      "🔄 آخر تحديث: " + data.updated;

  } catch (err) {
    console.error(err);

    document.querySelectorAll(".price").forEach(e => e.textContent = "خطأ");
    document.querySelectorAll(".box p").forEach(e => e.textContent = "خطأ");
  }
}

loadGold();
setInterval(loadGold, 60000);
