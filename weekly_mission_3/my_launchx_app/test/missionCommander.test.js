const MissionCommander = require('./../app/missionCommander')

describe("esto es una suite de pruebas", () => {
    test('caso de prueba 1', () => {
        const result = 1 + 2
        expect(result).toBe(3);
    });
})

describe("Unit tests for missions commander", () => {
    test('1 create a mission commander object', () => {
        const MyMissionCommander = new MissionCommander('Woopa')
        expect(MyMissionCommander.name).toBe('Woopa')
    })
})