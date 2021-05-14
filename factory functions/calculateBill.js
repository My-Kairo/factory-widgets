function calculateBill(){
    var totalCall = 0;
    var totalSms =0;

    function bothItems(items){
        var item = items.split(",")
        for ( var i=0; i<item.length; i++){
        var itemBillType = item[i].trim();
        if(itemBillType === "call"){
            totalCall += 2.75;
        }else if(itemBillType === "sms"){
            totalSms += 0.75;
        }
    }
    }
    function gettotalItems(){
        return totalSms + totalCall;
    }
    function getTotalCall(){
        return totalCall
    }
    function getTotalSms(){
        return totalSms;
    }
    function Level(){
        if(gettotalItems() >= 30){
            return "danger"
        }
        if(gettotalItems() >= 20){
            return "warning"
        }
    //      if (gettotalItems >= 20){
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
    
    }
    return{
        calculateBill,
        bothItems,
        gettotalItems,
        getTotalCall,
        getTotalSms,
        Level
    }
}