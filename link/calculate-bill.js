var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");


// add event listener
function calculateBtnClicked(){
    var calcInsta = calculateBill()

    var billItemType = billStringElement.value.trim()
    calcInsta.bothItems(billItemType)
    
    billTotalElement.innerHTML = calcInsta.gettotalItems().toFixed(2);

    billTotalElement.classList.add(calcInsta.Level())
   
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);

