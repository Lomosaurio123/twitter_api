const UserService = require('./../../app/services/UserService')
describe("Tests for UserService", () => {

    test("1. Create a new User using the UserService", () => {
        const user = UserService.create(1,"carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})