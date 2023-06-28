// Constraints for the generics
/*function showProductName<T extends { name: string }>(obj: T) {
	return `Name product: ${obj.name}`;
}

const myObj = { name: "Shoes" };
const otherProduct = { name: "Car", wheels: 4, window: 4 }

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));*/

//GENERICS AND INTERFACE
/*interface Animals<T, U> {
	name: string;
	species: string;
	gender: T;
	age?: U;
}

type Dog = Animals<string, string>
type Cat = Animals<string, number>

const myDog: Dog = { name: "Zeus", species: "Dog", gender: "Masculine", age: "4" };
const myCat: Cat = { name: "Lulu", species: "Cat", gender: "Female", age: 5 };

console.log(`Name:${myDog.name}\nSpecies:${myDog.species}\nGender:${myDog.gender}\nAge:${myDog.age}`);
console.log(`\nName:${myCat.name}\nSpecies:${myCat.species}\nGender:${myCat.gender}\nAge:${myCat.age}`);*/

//Type Params
/*function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
	return `The key ${[key]} this is present in object and have value ${obj[key]}`;
}

const myObj = {
	ssd: '1TB',
	ram: '16GB'
};
console.log(getSomeKey(myObj, 'ram'));*/


//KEYOF TYPE OPERATOR -- Create a new object based on the keyof
/*type Character = { name: string, age: number, gender: string, License: boolean }

type key = keyof Character

function showCharacter(obj: Character, name: key) {
	return `${obj[name]}`;
}
const myChar: Character = {
	name: "Thiago",
	age: 24,
	gender: "Male",
	License: true
}
console.log(showCharacter(myChar, 'name'));*/

//TYPEOF TYPE OPERATOR -- Create type based on Variable previous
/*const userName: string = "Thiago";
const userName2: typeof userName = "Henrique";
type x = typeof userName
const userName3: x = "Pereira";

console.log(userName);
console.log(userName2);
console.log(userName3);*/

//INDEXED ACCESS TYPES -- Create type based on key of object
/*type BMW = { km: number, kg: number, description: string }

type km = BMW['km']

const newBMW: BMW = {
	km: 20000,
	kg: 1370,
	description: "BMW X690",
}

function showKm(km: km) {
	console.log(`Vehicle km: ${km}`)
}
showKm(newBMW.km);

const newCar = {
	km: 15000,
	kg: 1200
}
showKm(newCar.km)*/

// Conditional types 

/*-----------------------------------------
interface A { }

interface B extends A { }

type myType = B extends A ? number : string;

interface Teste {
	showName(): string
}

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;
*/

type testA = "text";

type CustomType = `some ${testA}`;




