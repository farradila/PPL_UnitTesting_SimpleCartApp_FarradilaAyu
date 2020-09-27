//import { 
  //incrementQty, 
  //decrementQty,
  //recalculateSubtotal
//} from './helpers.js';

import "./helpers.js";
import * as lib from "./helpers.js";
import { recalculateSubtotal } from "./helpers.js";

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const promoButton = document.querySelector('#confirmButton');
const promoInput = document.querySelector('#code');

function hasil(){
  subtotal.value = lib.recalculateSubtotal(priceInput.value, qtyInput.value);
  document.getElementById("subtotal").textContent = `Rp.${subtotal.value}`;
  //subtotal.textContent = `Rp. ${recalculateSubtotal(priceInput.value, qtyInput.value)}`;
}

incrButton.addEventListener('click', () => {
  qtyInput.value = lib.incrementQty(qtyInput.value);
  hasil();
});

decrButton.addEventListener('click', () => {
  if(qtyInput.value > 1){
    qtyInput.value = lib.decrementQty(qtyInput.value);
    hasil();
  }
});

qty.addEventListener("focusout",()=>{
  document.getElementById("qty").value = lib.angka(
    qtyInput.id,
    qtyInput.value
  );
  hasil();
});

priceInput.addEventListener("focusout",()=>{
  document.getElementById("price").value = lib.angka(
    priceInput.id,
    priceInput.value
  );
  hasil();
});

promoButton.addEventListener('click', () => {
  if (promoInput.value == "farradila"){
    subtotal.textContent = subtotal.value - (subtotal.value * 0.25);
    console.log(subtotal.textContent);
  } else{
    subtotal.textContent = recalculateSubtotal(priceInput.value, qtyInput.value);
    console.log(subtotal.textContent);
  }
});


