function radioBttnBill(){
    var theCallCost = 0;
    var theSmsCost = 0;

    // var billItemType = checkedRadioBtn;

    function billtype(checkedRadioBtn){
    var billItemType = checkedRadioBtn
        if (billItemType === "call"){
            theCallCost += 2.75;
        }
        else if (billItemType === "sms"){
            theSmsCost += 0.75;
        }
    }
    function getThecallTotal(){
        
        return theCallCost;
    }
    function getThesmsTotal(){
        return theSmsCost;
    }
    function billsTotal(){
        return theCallCost + theSmsCost;
    }
    function criticAndwarning(){
    if(billsTotal() >= 50){
        return "danger"
    }
    if(billsTotal() >= 30){
        return "warning"
    } 
}
    return {
        getThecallTotal,
        getThesmsTotal,
        billtype,
        billsTotal,
        criticAndwarning
    }
}