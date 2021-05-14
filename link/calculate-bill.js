//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");


// add event listener
function calculateBtnClicked(){
    var calcInsta = calculateBill()

    var billItemType = billStringElement.value.trim()
    calcInsta.bothItems(billItemType)
    
    billTotalElement.innerHTML = calcInsta.gettotalItems().toFixed(2);

    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")
    billTotalElement.classList.add(calcInsta.Level())
    // if (gettotalItems() >= 20){
    //     calcInsta.classList.add("warning")
    //     }
    //     else if (gettotalItems() <= 20){
    //         calcInsta.classList.remove("warning")
    //     }
        
    //     if (gettotalItems() >= 30){
    //         calcInsta.classList.add("danger")
    //     }
    //     else if (gettotalItems() <= 30){
    //         calcInsta.classList.remove("danger")
    //     }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);

//if (gettotalItems >= 20){
    //     billTotalElement.classList.add("warning")
    // }
    // else if (gettotalItems <= 20){
    //     billTotalElement.classList.remove("warning")
    // }
    
    // if (gettotalItems >= 30){
    //     billTotalElement.classList.add("danger")
    // }
    // else if (gettotalItems <= 30){
    //     billTotalElement.classList.remove("danger")
    // }