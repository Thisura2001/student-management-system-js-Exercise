export default class StudentModel{
    constructor(id,firstName,lastName,address,program) {
        this._id = id;
        this._fname = firstName;
        this._lname = lastName;
        this._address = address;
        this._course = program;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get fname() {
        return this._fname;
    }

    set fname(fname) {
        this._fname = fname;
    }

    get lname() {
        return this._lname;
    }

    set lname(lname) {
        this._lname = lname;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get course() {
        return this._course;
    }

    set course(course) {
        this._course = course;
    }
}