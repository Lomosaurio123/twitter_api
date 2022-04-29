const UserService = require('./../../app/services/UserService')
describe("Tests for UserService", () => {

    test("1. Create a new User using the UserService", () => {
        const user = UserService.create(1,"carlogilmar", "Carlo")
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("carlogilmar")
        expect(userInfoList[2]).toBe("Carlo")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "carlogilmar", "Carlo")
        UserService.updateUserUsername(user, "carlog")
        expect(user.username).toBe("carlog")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "carlogilmar1", "Carlo")
        const user2 = UserService.create(2, "carlogilmar2", "Carlo")
        const user3 = UserService.create(3, "carlogilmar3", "Carlo")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("carlogilmar1")
        expect(usernames).toContain("carlogilmar2")
        expect(usernames).toContain("carlogilmar3")
    })

})