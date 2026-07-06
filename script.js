const API_KEY = "goldapi-395db2c868032a93dd29f6071dcd1585-io";

async function updateGold(){

try {

let response = await fetch(
"https://www.goldapi.io/api/XAU/USD",
{
method:"GET",
headers:{
"x-access-token": API_KEY,
"Content-Type":"application/json"
}
}
);


let data = await response.json();

let goldUSD = data.price;


// سعر الدولار مؤقتاً
let dollar = 50;


// حساب سعر الجرام
let gram24 = (goldUSD / 31.1035) * dollar;

let gram21 = gram24 * 21 / 24;
let gram18 = gram24 * 18 / 24;
let gram14 = gram24 * 14 / 24;


// دالة عرض شراء وبيع
function setGold(buy,sell,value){

document.getElementById(buy).innerHTML =
Math.round(value) + " جنيه";

document.getElementById(sell).innerHTML =
Math.round(value + 50) + " جنيه";

}


// العيارات
setGold("g24buy","g24sell",gram24);

setGold("g21buy","g21sell",gram21);

setGold("g18buy","g18sell",gram18);

setGold("g14buy","g14sell",gram14);


// الجنيه الذهب
setGold(
"coinbuy",
"coinsell",
gram21 * 8
);


// نصف جنيه
setGold(
"halfbuy",
"halfsell",
gram21 * 4
);


// ربع جنيه
setGold(
"quarterbuy",
"quartersell",
gram21 * 2
);


// الأونصة بالجنيه
setGold(
"ouncebuy",
"ouncesell",
goldUSD * dollar
);


// تحديث الوقت
document.querySelector(".update").innerHTML =
"🔄 آخر تحديث: الآن";


}

catch(error){

console.log(error);

document.querySelector(".update").innerHTML =
"⚠️ خطأ في تحميل الأسعار";

}

}


// تشغيل التطبيق
updateGold();


// تحديث كل دقيقة
setInterval(updateGold,60000);
