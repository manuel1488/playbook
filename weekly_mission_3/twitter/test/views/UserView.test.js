const UserView = require('./../../app/views/UserView')

describe('Test for user view', ()=>{
    test('return error object when try to create a new user with null value', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    });


    test('return error object when try to create a new user with payload invalid', () => {
        const payload =  { id: 12, username: null,  name: 'manuel'}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });


    test('return error object when try to create a new user with missing values', () => {
        const payload =  { username: null,  name: 'manuel'}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });


    test('return error object when try to create a new user with valid values', () => {
        const payload =  { id: 2, username: 'manuelalfaro',  name: 'manuel'}
        const result = UserView.createUser(payload)

        expect(result.id).toBe(2)
        expect(result.username).toBe('manuelalfaro')
        expect(result.name).toBe('manuel')
    });
})