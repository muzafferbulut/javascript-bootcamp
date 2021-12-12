export default class User {
    constructor(id, firstName, lastName, city) { // constructor kelime anlamı oluşturucu demek
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        console.log("user oluştu.")
    }
}