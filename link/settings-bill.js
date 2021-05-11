
var callCostSett = document.querySelector(".callCostSetting");
var smsCostSett = document.querySelector(".smsCostSetting");
var warningLevelSett = document.querySelector(".warningLevelSetting");
var criticalLevelSett = document.querySelector(".criticalLevelSetting");
var settingsElement = document.querySelector(".updateSettings")
var itemTypeElem = document.querySelector(".billItemTypeWithSettings")
var calltotElement = document.querySelector(".callTotalSettings")
var smstotalElement = document.querySelector(".smsTotalSettings")
var totalSettingsElem = document.querySelector(".totalSettings")

var addButtonElem = document.querySelector(".addBtnSettings");
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
 settInsta.setsmscost(Number(smsCostSett.value));
 settInsta.setwarning(Number(warningLevelSett.value));
 settInsta.setCritical(Number(criticalLevelSett.value));

 colorAdd();

}

settingsElement.addEventListener('click', updateSettings)

function Settings(){

    var settingsRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (settingsRadioBtn) {
        var itemSelected = settingsRadioBtn.value
        settInsta.conditions(itemSelected)

    calltotElement.innerHTML = settInsta.getTotalcallcost().toFixed(2);
    smstotalElement.innerHTML = settInsta.getTotalsmscost().toFixed(2);
    totalSettingsElem.innerHTML = settInsta.getTotalcost().toFixed(2)

        colorAdd();
    }
}

addButtonElem.addEventListener('click', Settings);
   

function colorAdd(){
     colour.classList.remove("warning");
    colour.classList.remove("danger");
    colour.classList.add(settInsta.getLevels());
}
