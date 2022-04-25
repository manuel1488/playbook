const User = require('./../../app/models/User')

describe('Unite test for class user', () => {
    test('Create a user object', () => {
        const user = new User(1, 'manuelalfaro', 'manuel', 'Bio')

        expect(user.id).toBe(1)
        expect(user.username).toBe('manuelalfaro')
        expect(user.name).toBe('manuel')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('test setters', () => {
        const user = new User(1, 'manuelalfaro', 'manuel', 'Bio')
        user.setUsername = 'manuel'
        expect(user.username).toBe('manuel')

        user.setBio = 'New bio'
        expect(user.bio).toBe('New bio')
    });
});

