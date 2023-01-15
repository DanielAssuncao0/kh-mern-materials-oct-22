
class Employee { 
    constructor(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    display() {
        console.log(`Id = ${this.id}, Name = ${this.name}, Gender = ${this.gender}`)
    }
}

module.exports = Employee;