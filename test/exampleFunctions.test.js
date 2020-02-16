const exampleCode = require('../modules/exampleCode');

test('Adds 2 + 2 to equal 4', () => {
    expect(exampleCode.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(exampleCode.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matchs only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(exampleCode.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(exampleCode.checkValue(null)).toBeFalsy();
});