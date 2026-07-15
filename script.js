const API_KEY = "goldapi-395db2c868032a93dd29f6071dcd1585-io";

async function loadGold(){

    try {

        const res = await fetch("https://www.goldapi.io/api/XAU/USD", {
            headers: {
                "x-access-token": API_KEY,
                "Content-Type": "application/json"
            }
        });
const data = await res.json();

console.log("رد الـ API:", data);

let ounce = Number(data.price || data.ask || data.metal_price);

if(!ounce){
    throw new Error("السعر غير موجود");
}



        

        // سعر الدولار (هنغيره بعدين ونربطه بتاعك)
        let dollar = 50;


        // سعر جرام الذهب عيار 24
        let gram24 = (ounce / 31.1035) * dollar;


        let gram21 = gram24 * 0.875;
        let gram18 = gram24 * 0.75;
        let gram14 = gram24 * 0.583;



        document.getElementById("g24buy").innerHTML =
        Math.round(gram24) + " جنيه";

        document.getElementById("g24sell").innerHTML =
        Math.round(gram24 * 1.01) + " جنيه";


        document.getElementById("g21buy").innerHTML =
        Math.round(gram21) + " جنيه";

        document.getElementById("g21sell").innerHTML =
        Math.round(gram21 * 1.01) + " جنيه";


        document.getElementById("g18buy").innerHTML =
        Math.round(gram18) + " جنيه";

        document.getElementById("g18sell").innerHTML =
        Math.round(gram18 * 1.01) + " جنيه";


        document.getElementById("g14buy").innerHTML =
        Math.round(gram14) + " جنيه";

        document.getElementById("g14sell").innerHTML =
        Math.round(gram14 * 1.01) + " جنيه";



        document.getElementById("coinbuy").innerHTML =
        Math.round(gram21 * 8) + " جنيه";


        document.getElementById("ouncebuy").innerHTML =
        Math.round(ounce * dollar) + " جنيه";


        document.getElementById("kilobuy").innerHTML =
        Math.round(gram24 * 1000) + " جنيه";


        // الشاشة (50 جرام عيار 21)
        document.getElementById("screenprice").innerHTML =
        Math.round(gram21 * 50) + " جنيه";



        document.querySelector(".update").innerHTML =
        "🔄 تم التحديث الآن";


    }

    catch(error){

        console.log(error);

        document.querySelector(".update").innerHTML =
        "❌ خطأ في تحميل الأسعار";

    }

}


loadGold();

setInterval(loadGold, 300000);
