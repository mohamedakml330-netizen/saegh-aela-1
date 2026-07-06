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

// تحويل الأونصة إلى جرام
let gram24 = goldUSD / 31.1035;

// تحويل الدولار للجنيه (هنضيف مصدر الدولار بعدين)
let dollar = 50;

let price24 = gram24 * dollar;

let price21 = price24 * 0.875;
let price18 = price24 * 0.75;
let price14 = price24 * 0.583;


document.getElementById("g24buy").innerHTML =
price24.toFixed(2);

document.getElementById("g21buy").innerHTML =
price21.toFixed(2);

document.getElementById("g18buy").innerHTML =
price18.toFixed(2);

document.getElementById("g14buy").innerHTML =
price14.toFixed(2);


}

catch(error){

console.log("خطأ في تحميل الذهب");

}

}


updateGold();

setInterval(updateGold,60000);
