const { formatCurrency, getCoins } = require("../src/js/money-functions.js");


describe("formatCurrency", () => {
  test("given amount of 0 return $0.00", () => {
    // Arrange
    let amount = 0;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$0.00');
  });

  test("given amount of 1 return $1.00", () => {
    // Arrange
    let amount = 1;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$1.00');
  });

  test("given amount of 1.5 return $1.50", () => {
    // Arrange
    let amount = 1.5;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$1.50');
  });

  test("given amount of 0.01 return $0.01", () => {
    // Arrange
    let amount = 0.01;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$0.01');
  });

  test("given amount of 527.6789 return $527.68", () => {
    // Arrange
    let amount = 527.6789;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$527.68');
  });

  test("given amount of -1 return -$1.00", () => {
    // Arrange
    let amount = -1;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('-$1.00');
  });

  test("given amount of -26.68942 return -$26.69", () => {
    // Arrange
    let amount = -26.68942;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('-$26.69');
  });

  test("given amount of 79.979 return $79.98", () => {
    // Arrange
    let amount = 79.979;

    // Act 
    const formattedCurrency = formatCurrency(amount);

    // Assert
    expect(formattedCurrency).toMatch('$79.98');
  });
});

describe("getCoins", () => {
  test("given 32 cents, return the minimum number of coins to make up given amount", () => {
    // Arrange
    let cents = 32;

    // Act
    const coinsObject = getCoins(cents);

    // Assert
    expect(coinsObject).toMatchObject({ quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
  });

  test("given 10 cents, return the minimum number of coins to make up given amount", () => {
    // Arrange
    let cents = 10;

    // Act
    const coinsObject = getCoins(cents);

    // Assert
    expect(coinsObject).toMatchObject({ quarters: 0, dimes: 1, nickels: 0, pennies: 0 });
  });

  test("given 27 cents, return the minimum number of coins to make up given amount", () => {
    // Arrange
    let cents = 27;

    // Act
    const coinsObject = getCoins(cents);

    // Assert
    expect(coinsObject).toMatchObject({ quarters: 1, dimes: 0, nickels: 0, pennies: 2 });
  });

  test("given 68 cents, return the minimum number of coins to make up given amount", () => {
    // Arrange
    let cents = 68;

    // Act
    const coinsObject = getCoins(cents);

    // Assert
    expect(coinsObject).toMatchObject({ quarters: 2, dimes: 1, nickels: 1, pennies: 3 });
  });
});