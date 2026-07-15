const API_KEY = "goldapi-395db2c868032a93dd29f6071dcd1585-io";

async function getGoldPrice(){

try{

let response = await fetch("https://www.goldapi.io/api/XAU/USD",{
headers:{
"x-access-token": API_KEY,
"Content-Type":"application/json"
}
});


let data = await response.json();


// سعر الأونصة بالدولار
let ounceUSD = data.price;


// تحويل الأونصة إلى جرام
let gramUSD = ounceUSD / 31.1035;


// سعر الدولار (مؤقت)
let usdEGP = 50;


// سعر جرام 24 بالمصري
let gram24 = gramUSD * usdEGP;


// العيارات
let g24 = gram24;
let g21 = g24 * 0.875;
let g18 = g24 * 0.75;
let g14 = g24 * 0.583;


// عرض الأسعار شراء
document.getElementById("g24buy").innerHTML = Math.round(g24)+" جنيه";
document.getElementById("g21buy").innerHTML = Math.round(g21)+" جنيه";
document.getElementById("g18buy").innerHTML = Math.round(g18)+" جنيه";
document.getElementById("g14buy").innerHTML = Math.round(g14)+" جنيه";


// بيع (زيادة بسيطة)
document.getElementById("g24sell").innerHTML = Math.round(g24*1.01)+" جنيه";
document.getElementById("g21sell").innerHTML = Math.round(g21*1.01)+" جنيه";
document.getElementById("g18sell").innerHTML = Math.round(g18*1.01)+" جنيه";
document.getElementById("g14sell").innerHTML = Math.round(g14*1.01)+" جنيه";


// جنيه الذهب 8 جرام عيار 21
document.getElementById("coinbuy").innerHTML =
Math.round(g21*8)+" جنيه";


// الأونصة
document.getElementById("ouncebuy").innerHTML =
Math.round(ounceUSD*usdEGP)+" جنيه";


// كيلو ذهب
document.getElementById("kilobuy").innerHTML =
Math.round(g24*1000)+" جنيه";


// الشاشة (مثلاً 50 جرام عيار 21)
document.getElementById("screenprice").innerHTML =
Math.round(g21*50)+" جنيه";


}

catch(error){

console.log(error);

document.querySelector(".update").innerHTML =
"⚠️ حدث خطأ في تحميل الأسعار";

}

}


getGoldPrice();

setInterval(getGoldPrice,300000);
