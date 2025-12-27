const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll("select");
const btn=document.querySelector("#convert-button");
const fromCurr=document.querySelector(".from-select");
const toCurr=document.querySelector(".to-select");
const exchangeRateText=document.querySelector(".exchange-rate");
const toAmtInput=document.querySelector(".to-amount-input");
const swapBtn=document.querySelector(".swap-button");
const form = document.querySelector(".from-amount-box");


// for(code in countryList){
//     console.log(code, countryList[code]);
// }

for(let select of dropdown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.value=currCode;
        newOption.innerText=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.appendChild(newOption);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

function updateFlag(element){
    let currCode=element.value;
    // console.log(currCode);
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

const updateRates=(rate)=>{
    exchangeRateText.innerText=`1 ${fromCurr.value} = ${rate.toFixed(2)} ${toCurr.value}`;
}


let rotation=0;

swapBtn.addEventListener("click", ()=>{
    rotation+=180;
    swapBtn.style.transform=`rotate(${rotation}deg)`;

    let temp=fromCurr.value;
    fromCurr.value=toCurr.value;
    toCurr.value=temp;
    updateFlag(fromCurr);
    updateFlag(toCurr);
    convert();
});

async function convert(){
    let amount=document.querySelector(".from-amount-input").value;
    // console.log(amount);
    if (amount==="" || amount<0){
        amount=0;
    }

    // console.log("converting from", fromCurr.value, "to", toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);
    let data=await response.json();
    // console.log("response:", response);
    // console.log("data:", data);
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    // let rate=data["usd"]["inr"];
    if (!rate) {
        exchangeRateText.innerText = "Rate unavailable";
        return;
    }
    console.log("rate:", rate);
    let convertedAmount=(amount*rate).toFixed(2);
    toAmtInput.value=convertedAmount;
    updateRates(rate);
}


btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    convert();
}); 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  convert();
});