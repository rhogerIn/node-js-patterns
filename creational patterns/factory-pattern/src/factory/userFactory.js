const UserRepository = require("../repository/userRepository")
const Database = require("../util/database")
const UserService = require('../service/userService')
class UserFactory {
    static async createInstance() {
        const db = new Database({ connectionString: 'mysql://localhost:3000' })
        const dbConnection = await db.connect()
        const userRepository = new UserRepository({ dbConnection })
        const userService = new UserService({ userRepository })

        return userService
    }
}

module.exports = UserFactory