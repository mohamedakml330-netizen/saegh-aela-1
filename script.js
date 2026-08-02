const API_URL = "https://solitary-field-8e9d.mohamedadara455.workers.dev/";

function formatPrice(value) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

async function loadGold() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // عيار 24
    document.getElementById("g24buy").textContent =
      formatPrice(data.gold24) + " EGP";

    // عيار 21
    document.getElementById("g21buy").textContent =
      formatPrice(data.gold21) + " EGP";

    // عيار 18
    document.getElementById("g18buy").textContent =
      formatPrice(data.gold18) + " EGP";

    // عيار 14
    document.getElementById("g14buy").textContent =
      formatPrice(data.gold14) + " EGP";


    // لو عندك أماكن البيع خليها نفس السعر مؤقتاً
    document.getElementById("g24sell").textContent =
      formatPrice(data.gold24) + " EGP";

    document.getElementById("g21sell").textContent =
      formatPrice(data.gold21) + " EGP";

    document.getElementById("g18sell").textContent =
      formatPrice(data.gold18) + " EGP";

    document.getElementById("g14sell").textContent =
      formatPrice(data.gold14) + " EGP";


    // كيلو الذهب
    document.getElementById("kilobuy").textContent =
      formatPrice(data.gold24 * 1000) + " EGP";


    console.log("تم تحديث أسعار الذهب", data);

  } catch (error) {
    console.log("خطأ في جلب الأسعار:", error);
  }
}

loadGold();

// تحديث كل دقيقة
setInterval(loadGold, 60000);
