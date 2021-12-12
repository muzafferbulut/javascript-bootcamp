console.log("odev1 klasöründe functions_hw.js dosyası kullanımda.")

/**
 *  JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
 * Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
 * (Araştırma konusu : şart blokları : if )
 */

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        let bolen = 0
        for (let j = 2; j < number; j++) {
            if (number%j == 0) {
                bolen = bolen +1
            }
        }
        if (bolen>0) {
            console.log(number+" asal değil.")
        }else{
            console.log(number+ " asal.")
        }
    }
}

findPrime(3,4,5,7,11,20)


/**
 * Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını 
 * bulan programı yazınız. (Arkadaş sayılar için google)
 */

function checkFriendlyNumbers(number1, number2) {
    let sumNumber1 = 0
    let sumNumber2 = 0
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sumNumber1 = sumNumber1+i
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2%i==0) {
            sumNumber2 = sumNumber2+i
        }
    }

    if (sumNumber1 == number2 && sumNumber2 == number1) {
        console.log("True")
    }else{
        console.log("False")
    }
}

checkFriendlyNumbers(15,20)

/**
 *  1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
 */

function perfectNumbers() {
    for (let i = 0; i < 1000; i++) {
        let toplam = 0
        for (let j = 0; j <= i; j++) {
            if (i%j == 0) {
                toplam = toplam + j
            }  
        }
        if (2*i == toplam) {
            console.log(i + " is a perfect number.")
        }
    }
}

perfectNumbers()

/**
 * 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
 */

function isPrime() {
    for (let i = 2; i < 1000; i++) {
        let bolen = 0
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                bolen = bolen +1
            }
        }
        if (bolen == 0) {
            console.log(i+" asal.")
        }
    }
}

isPrime()