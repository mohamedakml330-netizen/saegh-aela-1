const API_KEY = "goldapi-d4edeec04eb53dda6f7f1faf8544d176-io";

async function loadGold() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/EGP", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    // سعر الأونصة بالجنيه
    const ounce = data.price;

    // سعر جرام 24
    const g24 = ounce / 31.1035;

    // باقي الأعيرة
    const g21 = g24 * 21 / 24;
    const g18 = g24 * 18 / 24;
    const g14 = g24 * 14 / 24;

    // البيع (زيادة تقريبية)
    const sell = p => p + 20;

    document.getElementById("g24buy").textContent = g24.toFixed(2) + " ج";
    document.getElementById("g24sell").textContent = sell(g24).toFixed(2) + " ج";

    document.getElementById("g21buy").textContent = g21.toFixed(2) + " ج";
    document.getElementById("g21sell").textContent = sell(g21).toFixed(2) + " ج";

    document.getElementById("g18buy").textContent = g18.toFixed(2) + " ج";
    document.getElementById("g18sell").textContent = sell(g18).toFixed(2) + " ج";

    document.getElementById("g14buy").textContent = g14.toFixed(2) + " ج";
    document.getElementById("g14sell").textContent = sell(g14).toFixed(2) + " ج";

    // جنيه الذهب
    document.getElementById("coinbuy").textContent =
      (g21 * 8).toFixed(2) + " ج";

    // الأونصة
    document.getElementById("ouncebuy").textContent =
      ounce.toFixed(2) + " ج";

    // الكيلو
    document.getElementById("kilobuy").textContent =
      (g24 * 1000).toFixed(2) + " ج";

    // الشاشة
    document.getElementById("screenprice").textContent =
      ounce.toFixed(2) + " ج";

    // وقت التحديث
    document.querySelector(".update").innerHTML =
      "🔄 آخر تحديث: " + new Date().toLocaleTimeString("ar-EG");

  } catch (err) {
    console.error(err);

    document.querySelectorAll(".price").forEach(e => e.textContent = "خطأ");
    document.querySelectorAll(".box p").forEach(e => e.textContent = "خطأ");
  }
}

loadGold();
setInterval(loadGold, 60000);
