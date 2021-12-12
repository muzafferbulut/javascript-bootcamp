let cart = [
    {id:1, productName:"Telefon", quantity:1, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:1, unitPrice:30},
    {id:3, productName:"Kalem", quantity:12, unitPrice:17},
    {id:4, productName:"Kitap", quantity:3, unitPrice:200},
    {id:5, productName:"Defter", quantity:2, unitPrice:10},
    {id:6, productName:"Mouse", quantity:1, unitPrice:150},
    {id:7, productName:"Şarj Aleti", quantity:10, unitPrice:100},
]
// angular react ve vue değişimi referansın değişmesi ile tespit eder.
// map fonksiyonu ile istediğimiz arraylari iterate edebiliriz
// ya da istediğimiz işlemleri yapabiliriz. temelde tek tek 
// elemanları dolaşmaya yarar

// kullanımı şu şekildedir
cart.map(product=>
    {console.log(product.productName + " : "+product.unitPrice)
}) //sepeti dolaş ve isimleri yaz

// filter
let quantityOver = cart.filter(product=>product.quantity>2)
console.log(quantityOver)

// reduce
let total = cart.reduce((acc, product)=>acc+ product.unitPrice, 0)
console.log(total)


// sepete eleman ekleme simulasyonu
function addToCart(sepet) {
    sepet.push({id:8, productName:"Ruhsat", quantity:1, unitPrice:20})  
}

addToCart(cart)

console.log(cart) // eklenecektir

let sayi = 10
function artir(number) {
    number +=1
}
artir(sayi)
console.log(sayi) // sayı artmaz çünkü değer tip

// front-end teknolojilerinde referans değiştirebilmek ciddi
// avantajlar sağlar.

