let myFunctions = require('./function')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Dre')).toBe('Hello Dre.')
})

test("Addition Test", () => {
    expect(myFunctions.add(13, 2)).toBe(15)
})
