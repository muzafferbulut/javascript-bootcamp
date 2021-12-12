console.log("Sepete eklendi.")

console.log("Sepete eklendi.")

console.log("Sepete eklendi.")

console.log("Sepete eklendi.")

console.log("Sepete eklendi.")

console.log("Sepete eklendi.")

// Programlama en önemli konulardan biri DRY olarak geçen "kendini tekrar etme" kuralıdır. 
// Bu sebeple tekrar eden kod bloklarını fonksiyonlar yardımıyla bir defa yazıp tekrar tekrar
// kullanılabilir hale getiririz.

function addToCart(productName) { // fonksiyon tanımlama
    console.log("Sepete eklendi: "+productName)
}

addToCart("Elma")
addToCart("Armut")
addToCart("Kiraz")
addToCart() // tip güvenli olmadığı için bu durumda hata vermez -- undefined verir

// undefined tanımlı olmayan bişey olarak ele alınır. null ile karıştırılmamalıdır. +

function addTo(productName, quantity=10){ // parametreler sıralı olarak atandığı için default değerler en sona eklenir
    console.log("Sepete eklendi: "+productName + " Adet: "+quantity)
}

addTo("Elma")

// arrow function

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

// bir fonksiyonu bir değişkene atayabiliriz
let sayHello2 = function(){
    console.log("Hello world 2")
}
sayHello2()

function addToCart2(prodcutName, quantity, unitPrice) {
    // bu kullanım tercih edilmez. Bir nesneyi birden fazla özelliği ile tanımlamak istediğimizde objeleri kullanırız
}

function addToCart3(product) {
    console.log("Ürün: "+product.productName)
}

let product1 = {productName:"Elma", unitPrice:10, quantity:15} // product1 objesi

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:15}

let product3 = {productName:"Elma", unitPrice:10, quantity:15}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName) // karpuz sonucunu verecektir. Bir çok tasarım deseni bu süreçten beslenir
/*
Niye karpuz oldu?
Çünkü burada devreye değer ve referans tip kavramları girecektir. Product olarak isimlendirdiğimiz
veri referans tip olduğu için product3 nesnesinin özelliği karpuz oldu. Ama aynı örneği
değer tipler ile yapsak aynı değişikliği görmeyiz

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 200
console.log(sayi1) 20 çıktısını verecektir
*/

function addToCart4(products) {
    console.log(products)
}

let products = [product1, product2, product3]

addToCart4(products)

function add(number1, number2) {
    console.log(number1+number2)
}

add(20,30)

function add2(...numbers) { // rest  operatörü: her zaman fonksiyonun sonuna bırakın
    let toplam = 0
    for (let i = 0; i < numbers.length; i++) {
        toplam = toplam + numbers[i]
    }
    console.log(toplam)
}

add2(20,30,40)

let numbers = [20,10,30,40,50,600]
console.log(Math.max(...numbers)) // math.max fonksiyonu spread ile çalışır yani ayrı ayrı sayı göndermemiz girecektir

//destructuring
let [icAnadolu, marmara, karadeniz] = ["İç Anadolu", "Marmara","Karadeniz"]

console.log(marmara)