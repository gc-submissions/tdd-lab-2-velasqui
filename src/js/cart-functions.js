function calculateChange(payment, total) {
    return payment - total;
};

function isSufficientPayment(payment, total) {
    return payment >= total;
};

function calculateTotal(itemsArray) {
    let total = 0;
    itemsArray.forEach(item => {total += item.price;});
    return total;
};

function addItem(itemsArray, name, price) {
    const newItem = new Object();
    newItem.name = name;
    newItem.price = price;
    
    itemsArray.push(newItem);
};

function removeItem(itemsArray, index) {
    itemsArray.splice(index, 1);
}

module.exports = { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem };
