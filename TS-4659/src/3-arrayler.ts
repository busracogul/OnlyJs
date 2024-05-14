// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.


// Kodu buraya yazalım...

const ages: number[] = [];


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.


// Kodu buraya yazalım...
const gameBoard: string[][] = [["büşra", "çoğul"], ["react", "typescript"]];



// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}


// Kodu buraya yazalım...

type Product = {
    name: string,
    price: number
}


// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.


// Kodu buraya yazalım...

const getTotal = (products: Product[]) => {

    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
}

const products: Product[] = [
    { name: "coffee mug", price: 15 },
    { name: "notebook", price: 20 },
    { name: "pen", price: 8 }
];

const totalPrice = getTotal(products);
console.log("Toplam fiyat:", totalPrice);