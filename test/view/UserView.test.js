const UserView = require('./../../app/view/UserView')

describe("Test for UserView", () => {
    
    test("Return an error object when try to create a new user with an null playload", () => {
        const playload = null
        const result = UserView.createUser(playload)
        
        expect(result.error).toMatch(/playload no existe/)
    })

    test("Return an error object when try to create a new user with a playload with invalid propierties", () => {
        const playload = {username: null, name : 12, id: "id"}
        const result = UserView.createUser(playload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Return an error object when try to create a new user with a playload with missing propierties", () => {
        const playload = {username: "Username"}
        const result = UserView.createUser(playload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Create a user by given valid playload", () => {
        const playload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(playload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })
})