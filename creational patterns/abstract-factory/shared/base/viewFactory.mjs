import NotImplementedExcepetion from "../notImplementedException.mjs";

export default class ViewFactory {
    createTable() {
        throw new NotImplementedExcepetion(this.createTable.name)
    }
}