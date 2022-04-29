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
        expect(result.error).toMatch(/necesitan tener una valor válido/)
    })
})