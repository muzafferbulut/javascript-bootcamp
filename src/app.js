// burası bizim başlangıç componentidir. Diğer componentler buradan dallanır.

console.log("Merhaba kodlama.io"); // consola veri basmak için kullanılan kod bloğu

// alert("Makas geniş"); sayfada pop-up çıkarmak için kullanılır

var dolarDun = 9.20; // eski kodlarda hala kullanılır ama artık let ile değişken tanımlarız
var dolarBugun = 9.60;

let dolarKuru = 9;

{
    let dolarKuru = 10;
}

console.log(dolarKuru);

// sıklıkla kullanılan veri tiplerinden biri de const keywordu

const euroDun = 11;
console.log(euroDun); // const ile tanımlanan değişkenin değeri değiştirilemez

// birden fazla veriyi aynı değişkende tutmak için array kullanılır

let krediler = ["Konut Kredisi","Araç Kredisi","İhtiyaç Kredisi"]; // array tanımlama

console.log(krediler);

//  let users = getUsersFromApi(); ilerleyen zamanlarda bu şekilde kullanacağız

// arrayleri ekrana döngü yoluyla basmak

console.log("<ul>"); // bu döngü ile html list yapısı üretmiş olduk
for (let i = 0; i < krediler.length; i++) {
    console.log("<li>"+krediler[i]+"</li>");
}
console.log("</ul>");

// JS birinci hafta ödevi

var sayi = 15;
console.log(sayi)

const pi = 3.14
console.log(pi)

function topla(a, b) {
    return a+b;
}

console.log(topla(5,7))

let student = {id:1, name:"Muzaffer"}

function save(student, puan=10){ // default parametre en sonda yazılır.
    console.log(student.name + " : "+puan)
}

save(student, 100) // tip güvenli olmadığı için öğrenci göndereceğini varsayıyoruz. Başka bir veri ile de çalışacaktır

// undefined ile null karıştırılmamalıdır. null bellekte var ama referansı yok anlamındadır

let students = ["Muzaffer", "Samed","Salih"]
console.log(students);
for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
}

// rest - geriye kalan parametreler
let showProducts = function(id, ...products){ // js'de değişkene fonksiyon atanabilir. 
    // fonksiyonun imzasındaki üç nokta bir array geleceğini belirtir.
    console.log(id)
    console.log(products)
}

console.log(typeof showProducts);
showProducts("Elma","Armut","Portakal")

for (let index = 0; index < students.length; index++) {
    const element = students[index]
    console.log(element)
}

// spread
let points = [1,2,3,4,5,6,7,8,9,10]
console.log(...points)
console.log(Math.max(points))
console.log(..."ABC","D",..."EFG","H")

// destructuring
let populations = [10000, 20000, 30000]
let [small, medium, high] = populations
console.log("Small: "+small)
console.log("Medium: "+medium)
console.log("High: "+high)