import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) { // constructor kelime anlamı oluşturucu demek
        super(id, firstName, lastName, city, age) // user ile extends ettiğimiz için bu kısım user özelliklerinin yerini alır.
        this.salary = salary
    }
}