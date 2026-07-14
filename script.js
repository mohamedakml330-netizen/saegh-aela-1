const API_KEY = "goldapi-395db2c868032a93dd29f6071dcd1585-io";

async function updateGold() {

    try {

        const response = await fetch("https://www.goldapi.io/api/XAU/EGP", {
            method: "GET",
            headers: {
                "x-access-token": API_KEY,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        const ouncePrice = data.price;
        const gram24 = ouncePrice / 31.1035;
        const gram21 = gram24 * 21 / 24;
        const gram18 = gram24 * 18 / 24;
        const gram14 = gram24 * 14 / 24;

        function setPrice(buyId, sellId, price) {
            document.getElementById(buyId).textContent = Math.round(price) + " ج.م";
            document.getElementById(sellId).textContent = Math.round(price + 50) + " ج.م";
        }

        setPrice("g24buy","g24sell",gram24);
        setPrice("g21buy","g21sell",gram21);
        setPrice("g18buy","g18sell",gram18);
        setPrice("g14buy","g14sell",gram14);

        document.getElementById("coinbuy").textContent =
            Math.round(gram21 * 8) + " ج.م";

        document.getElementById("ouncebuy").textContent =
            Math.round(ouncePrice) + " ج.م";

        document.getElementById("kilobuy").textContent =
            Math.round(gram24 * 1000) + " ج.م";

        document.getElementById("screenprice").textContent =
            Math.round(gram21) + " ج.م";

        document.querySelector(".update").textContent =
            "آخر تحديث: " + new Date().toLocaleTimeString("ar-EG");

    } catch (err) {

        console.error(err);

        document.querySelector(".update").textContent =
            "فشل تحميل الأسعار";
    }
}

updateGold();
setInterval(updateGold, 60000);
