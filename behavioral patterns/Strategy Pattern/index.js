import ContentStrategy from './src/base/contentStrategy.js'
import PostgresStrategy from './src/strategy/postgresStategy.js'
import MongoDBStrategy from './src/strategy/mongoDBStartegy.js'

const postgresConnectionString = 'postgres://rogerio:12345678@localhost:5432/keyboard'
const postgresContext = new ContentStrategy(new PostgresStrategy(postgresConnectionString))
await postgresContext.connect()

const mongoDBConnectionString = 'mongodb://rogerio:12345678@localhost:27017/heores'
const mongoDBContext = new ContentStrategy(new MongoDBStrategy(mongoDBConnectionString))
await mongoDBContext.connect()

const data = [{
    name: 'Strategy Pattern Postgres',
    type: 'transaction'
}, {
    name: 'Go to Mong',
    type: 'activityLog'
}]


/* await postgresContext.create({ name: data[0].name })
console.log(await postgresContext.read()) */

/* await mongoDBContext.create({ name: data[1].name })
console.log(await mongoDBContext.read()) */

// Strategy Pattern Example

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoDBContext
}

for(const {type, name} of data) {
    const context = contextTypes[type]
    await context.create({name: name + Date.now() })

    //console.log(type, context.dbStrategy.constructor.name)
    console.log(await context.read())
}