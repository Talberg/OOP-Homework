// The Manager class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email,)
        this.officeNumber = officeNumber
        this.title = 'Manager'

    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager
// officeNumber
// getRole() (Overridden to return 'Manager')