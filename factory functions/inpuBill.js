function inputBillButtn(){
    var costForCalls = 0;
    var costForSms = 0;

    function billTypesButtn(billTypeTextElem){
        var itemBillType = billTypeTextElem.trim();
        if(itemBillType === "call"){
            costForCalls += 2.75;
        }else if(itemBillType === "sms"){
            costForSms += 0.75;
        }
    }
    function getCallTotal(){
        return costForCalls;
    }
    function getSmsTotal(){
        return costForSms;
    }
    function smsCallTotal(){
        return costForSms + costForCalls;
    }

    function TheLevels(){
        if(smsCallTotal() >= 50){
            return "danger"
        }
        if(smsCallTotal() >= 30){
            return "warning"
        }
        
    }
    return{
        // inputBillButtn,
        billTypesButtn,
        getCallTotal,
        getSmsTotal,
        smsCallTotal,
        TheLevels
    }
}