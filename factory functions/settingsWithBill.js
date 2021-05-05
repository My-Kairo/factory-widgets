function billWithSettings() {
    var thecallcost = 0;
    var thesmscost = 0;
    var thewarning = 0;
    var thecritical = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallcost(callcost){
        thecallcost = callcost;
    }
    function getCallcost() {
        return thecallcost;
    }

    function setsmscost(smscost){
        thesmscost = smscost;
    }
    function getsmscost(){
        return thesmscost
    }

    function setwarning(warningcost){
        thewarning = warningcost;
    }
    function getWarning(){
        return thewarning
    }

    function setCritical(criticalcost){
        thecritical = criticalcost;
    }
    function getcritical(){
        return thecritical
    }

    function makecall(){
        if(!hasReachedlevel()){
            callCostTotal += thecallcost
        }
    }

    function sendSMS(){
        if(!hasReachedlevel()){
            smsCostTotal += thesmscost
        }
    }
    function hasReachedlevel(){
        return getTotalcost() >= getcritical()
    }
    function getLevels(){
        if(getTotalcost() >= getcritical()){
            return "danger";
        }
        if(getTotalcost() >= getWarning()){
            return "warning";
        }
    }

    function getTotalcost(){
        return callCostTotal + smsCostTotal;
    }
    function getTotalcallcost(){
        return callCostTotal;
    }
    function getTotalsmscost(){
        return smsCostTotal;
    }
    function conditions(itemSelected){
        if(itemSelected === "call"){
            return makecall();
        }
        if(itemSelected === "sms"){
            return sendSMS();
        }
    }
    return {
        setCallcost,
        getCallcost,
        setsmscost,
        getsmscost,
        setwarning,
        getWarning,
        setCritical,
        getcritical,
        getTotalcost,
        getTotalcallcost,
        getTotalsmscost,
        makecall,
        sendSMS,
        getLevels,
        conditions
    }
}