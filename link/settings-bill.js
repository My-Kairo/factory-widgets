// get a reference to the sms or call radio buttons
var callCostSett = document.querySelector(".callCostSetting");
var smsCostSett = document.querySelector(".smsCostSetting");
var warningLevelSett = document.querySelector(".warningLevelSetting");
var criticalLevelSett = document.querySelector(".criticalLevelSetting");
var settingsElement = document.querySelector(".updateSettings")
var itemTypeElem = document.querySelector(".billItemTypeWithSettings")
//var itemTypeElemSms = document.querySelector("billItemTypeSms")
var calltotElement = document.querySelector(".callTotalSettings")
var smstotalElement = document.querySelector(".smsTotalSettings")
var totalSettingsElem = document.querySelector(".totalSettings")

var addButtonElem = document.querySelector(".addBtnSettings");
//var calltotal = document.querySelector(".callTotalTwo");
//var smstotal = document.querySelector(".smsTotalTwo");
//var totall = document.querySelector(".totalTwo");
var colour = document.querySelector(".pink");
//create a variable that will keep track of the total bill
var callsTotall = 0;
var smsTotall = 0;
var totallCost = 0;

// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var criticLevel = 0;
var warningLevel = 0;

var settInsta = billWithSettings()

//add an event listener for when the 'Update settings' button is pressed
function updateSettings(){
 settInsta.setCallcost(Number(callCostSett.value));
//  settInsta.getCallcost()
 settInsta.setsmscost(Number(smsCostSett.value));
//  settInsta.getsmscost()
 settInsta.setwarning(Number(warningLevelSett.value));
//  settInsta.getWarning()
 settInsta.setCritical(Number(criticalLevelSett.value));
//  settInsta.getcritical()
 colorAdd();

}

settingsElement.addEventListener('click', updateSettings)
//add an event listener for when the radio button is pressed
// var settInsta = billWithSettings()
function Settings(){

    var settingsRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingsRadioBtn) {
        var itemSelected = settingsRadioBtn.value
        settInsta.conditions(itemSelected)
    //     if(totallCost < criticLevel) {
    //         var billTypeElem = settingsRadioBtn.value;
           
    //         if (billTypeElem === "call"){
    //         callsTotall += callCost;
    //         }
    //         if (billTypeElem === "sms"){
    //         smsTotall += smsCost;
    //         }
        }
   // var itemType = itemTypeElem.value.trim()
    // settInsta.setCallcost(itemType)
    // settInsta.setsmscost(itemType)
    // settInsta.setCritical(itemType)
    // settInsta.setwarning(itemType)

    calltotElement.innerHTML = settInsta.getTotalcallcost().toFixed(2);
    smstotalElement.innerHTML = settInsta.getTotalsmscost().toFixed(2);
    // totallCost = callsTotall + smsTotall;
    totalSettingsElem.innerHTML = settInsta.getTotalcost().toFixed(2)

        colorAdd();
    // colour.classList.add(settInsta.getTheWarnings())
//alert(totalCost);
}

addButtonElem.addEventListener('click', Settings);
   

function colorAdd(){
     colour.classList.remove("warning");
    colour.classList.remove("danger");
    colour.classList.add(settInsta.getLevels());
}
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

