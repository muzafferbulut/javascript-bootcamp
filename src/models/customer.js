import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber) { // constructor kelime anlamı oluşturucu demek
        super(id, firstName, lastName, city, age) // user ile extends ettiğimiz için bu kısım user özelliklerinin yerini alır.
        this.creditCardNumber = creditCardNumber
    }
}