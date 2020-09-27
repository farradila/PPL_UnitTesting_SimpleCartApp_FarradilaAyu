const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty){
    return price*qty;
}

function angka(Id,Value){
    if(isNaN(Value) || Value <0 ){
        if(Id == "price"){
            return "0";
        }else if(Id == "qty"){
            return "1";
        }else{
            return "0";
        }    
    }else{
        return Value;
    }
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    angka
};