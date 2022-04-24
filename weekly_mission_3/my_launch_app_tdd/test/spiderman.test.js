const Spiderman = require('./../app/spiderman')

describe("A fail test", () => {
    test('Case 1 for dummy', () => {
        const obviusResult = 1 + 2
        expect(obviusResult).toBe(10)
    });
})

describe("Unit test for spiderman class", ()=> {
    test('create spiderman object', ()=>{
        const andrewGrafield = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 2, 'Sony')

        expect(andrewGrafield.name).toBe("Spiderman Sony")
        expect(andrewGrafield.age).toBe(31)
        expect(andrewGrafield.actor).toBe('Andrew Garfield')
        expect(andrewGrafield.movies).toBe(2)
        expect(andrewGrafield.studio).toBe('Sony')
    })
})