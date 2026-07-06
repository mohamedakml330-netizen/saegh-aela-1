const API_KEY = "goldapi-395db2c868032a93dd29f6071dcd1585-io";

async function updateGold(){

try{

let response = await fetch(
"https://www.goldapi.io/api/XAU/EGP",
{
headers:{
"x-access-token": API_KEY,
"Content-Type":"application/json"
}
}
);

let data = await response.json();

let ounceEGP = data.price;

// الأونصة 31.1035 جرام
let g24 = ounceEGP / 31.1035;

let g21 = g24 * 21 / 24;
let g18 = g24 * 18 / 24;
let g14 = g24 * 14 / 24;


// فرق بيع تقريبي
function putPrice(buyId,sellId,value){

let buy = value;
let sell = value + 50;

document.getElementById(buyId).innerHTML =
Math.round(buy) + " جنيه";

document.getElementById(sellId).innerHTML =
Math.round(sell) + " جنيه";

}


// العيارات
putPrice("g24buy","g24sell",g24);

putPrice("g21buy","g21sell",g21);

putPrice("g18buy","g18sell",g18);

putPrice("g14buy","g14sell",g14);


// جنيه ذهب 8 جرام عيار 21
putPrice(
"coinbuy",
"coinsell",
g21 * 8
);


// نصف جنيه 4 جرام
putPrice(
"halfbuy",
"halfsell",
g21 * 4
);


// ربع جنيه 2 جرام
putPrice(
"quarterbuy",
"quartersell",
g21 * 2
);


// الأونصة
putPrice(
"ouncebuy",
"ouncesell",
ounceEGP
);


document.querySelector(".update").innerHTML =
"🔄 آخر تحديث: الآن";


}

catch(error){

console.log(error);

document.querySelector(".update").innerHTML =
"⚠️ تعذر تحميل الأسعار";

}

}


updateGold();

setInterval(updateGold,60000);
