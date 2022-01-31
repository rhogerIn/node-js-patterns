import MongoDB from 'mongodb'

export default class MongoDBStrategy {
    #instace
    constructor(connectionString) {
        const { pathname: dbName } = new URL(connectionString)
        this.connectionString = connectionString.replace(dbName, '')
        this.db = dbName.replace(/\W/, '')
        this.collection = 'warriors'
    }

    async connect() {
        const client = new MongoDB.MongoClient(this.connectionString, {
            useUnifiedTopology: true
        })

        await client.connect()
        const db = client.db(this.db).collection(this.collection)
        this.#instace = db
    }

    async create(item) {
        return this.#instace.insertOne(item)
    }
    
    async read(item) {
        return this.#instace.find().toArray()
    }
}