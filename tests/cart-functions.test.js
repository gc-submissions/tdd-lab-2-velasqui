const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require('../src/js/cart-functions.js');

describe("calculateChange", () => {
  test("When payment is 6 and total 5 then change will be 1", () => {
  // Arrange
  const total = 5;
  const payment = 6;

  // Act
  const change = calculateChange(payment, total);

  // Assert
  expect(change).toBe(1);
  });

  test("When payment is 13.03 and total 12.30 then change will be 0.73", () => {
  // Arrange
  const total = 12.30;
  const payment = 13.03;

  // Act
  const change = calculateChange(payment, total);

  // Assert
  expect(change).toBeCloseTo(0.73);
  });

  test("When payment is 67.23 and total 40 then change will be 27.23", () => {
  // Arrange
  const total = 40;
  const payment = 67.23;

  // Act
  const change = calculateChange(payment, total);

  // Assert
  expect(change).toBeCloseTo(27.23);
  });
});

describe("isSufficientPayment", () => {
  test("When total is 5 and payment is 6 then expect isSufficientPayment to return true", () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  });

  test("When total is 10 and payment is 7 then expect isSufficientPayment to return false", () => {
    // Arrange
    const total = 10;
    const payment = 7;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(false);
  });

  test("When total is 3 and payment is 3 then expect isSufficientPayment to return true", () => {
    // Arrange
    const total = 3;
    const payment = 3;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  });

  test("When total is 18 and payment is 6 then expect isSufficientPayment to return false", () => {
    // Arrange
    const total = 18;
    const payment = 6;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("Return the total with one item", () => {
    // Arrange
    const items = [{name: 'Ball', price: 4.99}];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toEqual(4.99);
  });

  test("Return the total with three items", () => {
    // Arrange
    const items = [{name: 'Ball', price: 3.50}, {name: 'Jelly', price: 12.99}, {name: 'Book', price: 0.03}];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toBeCloseTo(16.52);
  });

  test("Return the total with no items", () => {
    // Arrange
    const items = [];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toEqual(0);
  });

  test("Return the total with two items", () => {
    // Arrange
    const items = [{name: 'Bike', price: 1500}, {name: 'Tire', price: 50}];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toEqual(1550);
  });
});

describe("addItem", () => {
  test("Adds newItem to the end of the given empty array", () => {
    // Arrange
    let itemsArray = [];
    let name = 'Beans';
    let price = 3;

    // Act
    addItem(itemsArray, name, price);

    // Assert 
    expect(itemsArray).toContainEqual({name: 'Beans', price: 3});
  });

  test("Adds newItem to the end of the given array that has one item", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}];
    let name = 'Sugar';
    let price = 2;

    // Act
    addItem(itemsArray, name, price);

    // Assert 
    expect(itemsArray).toHaveLength(2);
    expect(itemsArray).toContainEqual({name: 'Beans', price: 3});
    expect(itemsArray).toContainEqual({name: 'Sugar', price: 2});
  });

  test("array with 3 items", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}, {name: 'Sugar', price: 2}, {name: 'Salt', price: 1}];
    let name = 'Pepper';
    let price = 4;

    // Act
    addItem(itemsArray, name, price);

    // Assert 
    expect(itemsArray).toHaveLength(4);
  });
});

describe("removeItem", () => {
  test("remove first element from an array of three items", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}, {name: 'Sugar', price: 2}, {name: 'Salt', price: 1}];
    let index = 0;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({name: 'Sugar', price: 2});
    expect(itemsArray).toContainEqual({name: 'Salt', price: 1});
  });

  test("remove last element from an array of three items", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}, {name: 'Sugar', price: 2}, {name: 'Salt', price: 1}];
    let index = (itemsArray.length - 1);

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({name: 'Beans', price: 3});
    expect(itemsArray).toContainEqual({name: 'Sugar', price: 2});
  });

  test("remove middle element from an array of three items", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}, {name: 'Sugar', price: 2}, {name: 'Salt', price: 1}];
    let index = 1;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toContainEqual({name: 'Beans', price: 3});
    expect(itemsArray).toContainEqual({name: 'Salt', price: 1});
  });

  test("remove the only element from an array of one item", () => {
    // Arrange
    let itemsArray = [{name: 'Beans', price: 3}];
    let index = 0;

    // Act
    removeItem(itemsArray, index);

    // Assert
    expect(itemsArray).toHaveLength(0);
  });
});