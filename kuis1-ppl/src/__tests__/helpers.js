/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const{
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    qtyInput,
    priceInput,
    Value
} = require('../helpers.js');

test('Qty 1 ditambah 1 sama dengan 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('jika Qty 2 dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Jika price 50000 dikali qty 2 maka hasilnya 100000', () => {
    expect(recalculateSubtotal(50000,2)).toBe(100000);
});