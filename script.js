const API_KEY = "goldapi-d4edeec04eb53dda6f7f1faf8544d176-io";

async function loadGold() {
    try {
        const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
            method: "GET",
            headers: {
                "x-access-token": API_KEY,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(API Error: ${response.status});
        }

        const data = await response.json();

        const ounce = Number(data.price  data.ask  data.bid);

        if (isNaN(ounce)) {
            throw new Error("لم يتم العثور على سعر الأونصة");
        }

        const dollar = 50;

        const gram24 = (ounce / 31.1035) * dollar;
        const gram21 = gram24 * 0.875;
        const gram18 = gram24 * 0.75;
        const gram14 = gram24 * 0.5833;

        document.getElementById("g24buy").textContent = Math.round(gram24) + " جنيه";
        document.getElementById("g24sell").textContent = Math.round(gram24 * 1.01) + " جنيه";

        document.getElementById("g21buy").textContent = Math.round(gram21) + " جنيه";
        document.getElementById("g21sell").textContent = Math.round(gram21 * 1.01) + " جنيه";

        document.getElementById("g18buy").textContent = Math.round(gram18) + " جنيه";
        document.getElementById("g18sell").textContent = Math.round(gram18 * 1.01) + " جنيه";

        document.getElementById("g14buy").textContent = Math.round(gram14) + " جنيه";
        document.getElementById("g14sell").textContent = Math.round(gram14 * 1.01) + " جنيه";

        document.getElementById("coinbuy").textContent = Math.round(gram21 * 8) + " جنيه";
        document.getElementById("ouncebuy").textContent = Math.round(ounce * dollar) + " جنيه";
        document.getElementById("kilobuy").textContent = Math.round(gram24 * 1000) + " جنيه";
        document.getElementById("screenprice").textContent = Math.round(gram21 * 50) + " جنيه";

        document.querySelector(".update").textContent =
            "آخر تحديث: " + new Date().toLocaleTimeString("ar-EG");

    } catch (e) {
        console.error(e);

        document.querySelector(".update").textContent =
            "خطأ في تحميل الأسعار";

        [
            "g24buy","g24sell",
            "g21buy","g21sell",
            "g18buy","g18sell",
            "g14buy","g14sell",
            "coinbuy","ouncebuy",
            "kilobuy","screenprice"
        ].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = "خطأ";
        });
    }
}

loadGold();
setInterval(loadGold, 300000);
