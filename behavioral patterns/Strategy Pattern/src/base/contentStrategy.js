export default class ContentStrategy {
    constructor(connectionString) {
        this.connectionString = connectionString
    }

    async connect() {
        return this.connectionString.connect()
    }

    async create(item) {
        return this.connectionString.create(item)
    }
    
    async read(item) {
        return this.connectionString.read(item)
    }
}