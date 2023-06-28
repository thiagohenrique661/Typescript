/*interface Product {
    name: string;
    price: number;
    amount: number;
    description: string;
    isAvailable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`Name: ${product.name} \nPrice: $${product.price} \nAmount: ${product.amount} \nDescription: ${product.description}\nAvailable: ${product.isAvailable}`);

    if (product.amount > 0 ? product.isAvailable === true : product.isAvailable === false) {
        console.log(`The product ${product.name} is available`);
    }

}

const tennis: Product = {
    name: "Tennis Jordan 1 Mid Masc",
    price: 1000,
    amount: 10,
    description: "Tennis",
    isAvailable: true
}

const shirt: Product = {
    name: "Shirt nike 2023",
    price: 300,
    amount: 0,
    description: "Tennis",
    isAvailable: false
}

showProductDetails(tennis);
showProductDetails(shirt);*/

/*interface User {
    name: string;
    email: string;
    role?: string;
}

function showUserDetails(user: User) {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
    if (user.role) {
        console.log(`Role: ${user.role}`);
    }
}
const u1: User = { name: 'Thiago5676', email: 'Thiago2023033@gmail.com', role: 'Devepoler' }
const u2: User = { name: 'Thiago5676', email: 'Thiago2023033@gmail.com' }
showUserDetails(u1);
showUserDetails(u2);*/

//READONLY
/*interface Car {
    brand: string;
    readonly wheels: string;
}

const RangeRover: Car = {
    brand: "Range Rover",
    wheels: "4"
}
console.log(RangeRover.brand + '\n' + RangeRover.wheels);*/


//INDEX SIGNATURE
/*interface CooordObject {
    [index : string] : number;
}

let coords : CooordObject ={
    x: 5,
    y: 0
}*/

/*
interface Human {
    name: string;
    age: number;
    height: number,
}

interface SuperHuman extends Human {
    superPower: string[];
}

const thiago: Human = {
    name: "Thiago",
    age: 24,
    height: 1.80
}

const luffy: SuperHuman = {
    name: "Luffy",
    age: 20,
    height: 1.70,
    superPower: ["Super force", " man rubber", " Gear 5: Imagination"]
}


console.log(thiago.name + '\n' + thiago.age + '\n' + thiago.height);
console.log(luffy.name + '\n' + luffy.age + '\n' + luffy.superPower)*/

/*
interface Character {
    name: string;
}
interface rifle {
    type: string;
    caliber: number;
}
type kalashnikov = Character & rifle

const ak47: kalashnikov = {
    name: 'ak47',
    type: 'rifle',
    caliber: 9
}
console.log(ak47.name + '\n' + ak47.type + '\n' + ak47.caliber)*/

// ------Readonly Array----------------
/*
let myArray: ReadonlyArray<string> = ["Doritos", "Ruffles", "Fandangos"];

myArray.forEach((item) => {
    console.log(item);
});

myArray = myArray.map((item) =>{
    return ``

});*/

//TUPLAS
/*type fiveNumbers = [number, number, number, number, number]; //DEFININDO O TIPO DOS ITENS DO ARRAY
const myNumberArray: fiveNumbers = [10, 20, 30, 40, 50];

myNumberArray.forEach((item) => {
    console.log(item);
}); */

//TUPLAS READONLY
/*/function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);*/











