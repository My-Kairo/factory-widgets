
var billTypeTextElem = document.querySelector(".billTypeText");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var redR = document.querySelector(".red");
//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed

var textInsta= inputBillButtn()
function textBillTotal(){

    var itemBillType = billTypeTextElem.value.trim();
    textInsta.billTypesButtn(itemBillType)

    callsTotalElem.innerHTML = textInsta.getCallTotal().toFixed(2);
    smsTotalElem.innerHTML = textInsta.getSmsTotal().toFixed(2);
    totalCostElem.innerHTML = textInsta.smsCallTotal().toFixed(2)

    redR.classList.add(textInsta.TheLevels());
}
textTotalAddBtn.addEventListener('click', textBillTotal);
