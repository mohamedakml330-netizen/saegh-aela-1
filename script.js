async function getGoldPrices() {
    try {
        // رابط مباشر ومجاني يعطيك أسعار الذهب في مصر فوراً
        const response = await fetch('https://coingecko.com');
        const data = await response.json();
        
        // حساب سعر جرام الذهب عيار 24 تقريباً في مصر
        const pricePerOunce = data['pax-gold'].egp;
        const gold24 = (pricePerOunce / 31.1035).toFixed(0);
        const gold21 = (gold24 * 0.875).toFixed(0);
        const gold18 = (gold24 * 0.75).toFixed(0);

        console.log("عيار 24:", gold24, "جنيه");
        console.log("عيار 21:", gold21, "جنيه");
        console.log("عيار 18:", gold18, "جنيه");

        // هنا يمكنك ربط الأرقام بصفحة الـ HTML مباشرة
        // document.getElementById('price21').innerText = gold21 + " ج.م";

    } catch (error) {
        console.error("خطأ في جلب الأسعار:", error);
    }
}

window.onload = getGoldPrices;
