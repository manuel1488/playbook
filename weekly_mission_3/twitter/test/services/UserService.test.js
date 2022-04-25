const UserService = require('./../../app/services/UserService')

describe('test for userservice', ()=>{
    test('creata a new user usgin userservice', () => {
        const user = UserService.create(1, 'manuelalfaro', 'manuel')

        expect(user.username).toBe('manuelalfaro')
        expect(user.id).toBe(1)
        expect(user.name).toBe('manuel')
        expect(user.bio).not.toBeUndefined()
    });

    test('2. get all user data in list', () => {
        const user = UserService.create(1, 'manuelalfaro', 'manuel')
        const userInfoList = UserService.getInfo(user)

        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe('manuelalfaro')
        expect(userInfoList[2]).toBe('manuel')
        expect(userInfoList[3]).toBe('Sin bio')
    });

    test('3. update username with UserService class', () => {
        const user = UserService.create(1, 'manuelalfaro', 'manuel')
        UserService.updteUserUserName(user, 'manuel')

        expect(user.username).toBe('manuel')
    });


    test('3. update username with UserService class', () => {
        const user = UserService.create(1, 'manuelalfaro', 'manuel')
        UserService.updteUserUserName(user, 'manuel')

        expect(user.username).toBe('manuel')
    });


    test('4. given a list of users, give me the list of usernames', () => {
        const user1 = UserService.create(1, 'manuelalfaro1', 'manuel')
        const user2 = UserService.create(1, 'manuelalfaro2', 'manuel')
        const user3 = UserService.create(1, 'manuelalfaro3', 'manuel')

        const usernames = UserService.getAllUsersNames([user1, user2, user3])
        
        expect(usernames).toContain('manuelalfaro1')
        expect(usernames).toContain('manuelalfaro2')
        expect(usernames).toContain('manuelalfaro3')
    });
})