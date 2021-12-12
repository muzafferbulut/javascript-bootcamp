import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new ElasticLogger()

let userService = new UserService(logger1)

let user1 = new User(1, "Muzaffer", "Bulut","İstanbul") // newlendiği zaman yapıcı blok çalışır
let user2 = new User(2, "Baran","Gökçekli","Muğla")

userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(1))

//userService.getById(1)

let customer = { id: 1, firstName: "Muzaffer" } // bir obje oluşturalım
customer.lastName = "Bulut" // olmayan bir özelliği varmış gibi yazıyoruz

console.log(customer.lastName) // yazdığımız özelliği eklediğini gördük
/**
 * Yani js kullanırken sonradan bir değer eklemek gerektiğinde bu şekilde
 * ekleme yapabiliriz.
 */

console.log("-------------")
userService.load() // kullanıcılar listelendi.  

let customerToAdd = new Customer(1, "Seda","Ercan","Ankara","ghgdgh")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log("Müşteriler")
console.log(userService.customers) // müşteriler yazdırıldı
console.log("Çalışanlar")
console.log(userService.employees) // çalışanlar yazdırıldı
console.log(userService.errors) // bu yapıyı gerçek hayat uygulamalarında validasyon için kullanıyoruz.

console.log("----- sorted -----")
console.log(userService.getCustomersSorted())
