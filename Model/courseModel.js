
export default class courseModel{
    constructor(id,Name,description) {
        this._id = id;
        this._name = Name;
        this._description = description;


    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

}