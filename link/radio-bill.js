
var checkedRadioBtn = document.querySelector(".billItemTypeRadio");
var addButton = document.querySelector(".radioBillAddBtn");
var calltotal = document.querySelector(".callTotalTwo");
var smstotal = document.querySelector(".smsTotalTwo");
var totall = document.querySelector(".totalTwo");
var color = document.querySelector(".orange");
//create a variable that will keep track of the total bill
var totalCalls = 0;
var totalsms = 0;

//add an event listener for when the radio button is pressed
var radInsta = radioBttnBill()
function textBillTotal(){
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   
    var typeOfBill = checkedRadioBtn.value.trim()

    radInsta.billtype(typeOfBill)

    calltotal.innerHTML = radInsta.getThecallTotal().toFixed(2);
    smstotal.innerHTML = radInsta.getThesmsTotal().toFixed(2);
    totall.innerHTML = radInsta.billsTotal().toFixed(2)

    color.classList.add(radInsta.criticAndwarning())
}
addButton.addEventListener('click', textBillTotal);
