const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert');

// <To mock your database instance>
const dbData = [{ name: 'Rogherin'}, { name: 'Souza' }]
class MockDatabase {
    connect = () => this
    find = async (query) => dbData
}

rewiremock(() => require('../src/util/database')).with(MockDatabase)
// </To mock your database instance>

;(async () => {
    {
        // This example is to do tests without database connection 
        const expected = [{ name: 'ROGHERIN'}, { name: 'SOUZA' }]

        rewiremock.enable()    
        const UserFactory = require('../src/factory/userFactory');
        const userFactory = await UserFactory.createInstance()
        const result = await userFactory.find()

        deepStrictEqual(result, expected)

        rewiremock.disable()
    }
    {
        // test without rewire mock
        const expected = [{ name: 'ROGERIO'}]

        const UserFactory = require('../src/factory/userFactory');
        const userFactory = await UserFactory.createInstance()
        const result = await userFactory.find()

        deepStrictEqual(result, expected)
    }
})()