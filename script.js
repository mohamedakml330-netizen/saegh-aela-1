// 1. حط مفتاح الـ API الجديد اللي نسخته من الموقع هنا بين علامات التنصيص
const API_KEY = "goldapi-d4edeec04eb53dda6f7f1faf8544d176-io"; 

async function loadGold() {
    try {
        console.log("جاري طلب الأسعار من GoldAPI...");
        
        // جلب سعر الأونصة بالدولار
        const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
            headers: {
                "x-access-token": API_KEY,
                "Content-Type": "application/json"
            }
        });
        
        if (!res.ok) {
            throw new Error(`خطأ في الاتصال بالـ API: ${res.status}`);
        }

        const data = await res.json();
        console.log("رد الـ API كامل:", data);

        // قراءة سعر الأونصة بأكثر من طريقة لضمان الدقة
        let ounce = Number(data.price || data.ask || data.metal_price || data.bid);

        if (!ounce || isNaN(ounce)) {
            throw new Error("لم نتمكن من قراءة سعر الأونصة من الـ API");
        }

        // 2. سعر الدولار الحالي اللي شغالين بيه في الحسبة (حسب ملف dollar.html عندك)
        let dollar = 50; 

        // حساب جرام 24 (الأونصة = 31.1035 جرام)
        let gram24 = (ounce / 31.1035) * dollar;

        // حساب باقي العيارات بناءً على عيار 24
        let gram21 = gram24 * 0.875;
        let gram18 = gram24 * 0.75;
        let gram14 = gram24 * 0.583;

        // ربط البيانات بصفحة الـ HTML وعرض الأسعار (شراء وبيع مع هامش 1%)
        document.getElementById("g24buy").innerHTML = Math.round(gram24) + " جنيه";
        document.getElementById("g24sell").innerHTML = Math.round(gram24 * 1.01) + " جنيه";

        document.getElementById("g21buy").innerHTML = Math.round(gram21) + " جنيه";
        document.getElementById("g21sell").innerHTML = Math.round(gram21 * 1.01) + " جنيه";

        document.getElementById("g18buy").innerHTML = Math.round(gram18) + " جنيه";
        document.getElementById("g18sell").innerHTML = Math.round(gram18 * 1.01) + " جنيه";

        document.getElementById("g14buy").innerHTML = Math.round(gram14) + " جنيه";
        document.getElementById("g14sell").innerHTML = Math.round(gram14 * 1.01) + " جنيه";

        // تحديث باقي الحسابات (جنيه الذهب، الأونصة، الكيلو، الشاشة)
        document.getElementById("coinbuy").innerHTML = Math.round(gram21 * 8) + " جنيه";
        document.getElementById("ouncebuy").innerHTML = Math.round(ounce * dollar) + " جنيه";
        document.getElementById("kilobuy").innerHTML = Math.round(gram24 * 1000) + " جنيه";
        document.getElementById("screenprice").innerHTML = Math.round(gram21 * 50) + " جنيه";

        // تحديث الوقت في الصفحة ليعرف المستخدم متى تم التحديث
        document.querySelector(".update").innerHTML = "🔄 آخر تحديث: " + new Date().toLocaleTimeString("ar-EG");

    } catch (error) {
        console.error("تفاصيل الخطأ الحاصل:", error);
        document.querySelector(".update").innerHTML = "❌ خطأ في تحميل الأسعار؛ تأكد من المفتاح";
        
        // تغيير كلمة تحميل إلى خطأ لتوضيح المشكلة للمستخدم
        document.getElementById("g24buy").innerHTML = "خطأ";
        document.getElementById("g21buy").innerHTML = "خطأ";
        document.getElementById("g18buy").innerHTML = "خطأ";
        document.getElementById("g14buy").innerHTML = "خطأ";
    }
}

// تشغيل الدالة فوراً عند فتح الصفحة
loadGold();

// تحديث تلقائي للأسعار كل 5 دقائق بدون إعادة تحميل الصفحة
setInterval(loadGold, 300000);
