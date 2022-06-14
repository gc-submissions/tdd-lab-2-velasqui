function formatCurrency(amount) {
    if (amount >= 0) {
        return '$' + amount.toFixed(2);
    } else if (amount < 0) {
        return '-$' + Math.abs(amount).toFixed(2);
    };
};

function getCoins(cents) {
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const pennie = 1;
    let totalCoins = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    while (cents !== 0) {
        if (cents >= quarter) {
            totalCoins.quarters++;
            cents -= quarter;
        };
        if (cents >= dime) {
            totalCoins.dimes++;
            cents -= dime;
        };
        if (cents >= nickel) {
            totalCoins.nickels++;
            cents -= nickel;
        };
        if (cents >= pennie) {
            totalCoins.pennies++;
            cents -= pennie;
        };
    };

    return totalCoins;
};

module.exports = { formatCurrency, getCoins };