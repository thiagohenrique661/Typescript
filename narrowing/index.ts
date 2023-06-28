/*function sum(number1: number | string, number2: number | string) {

    if (typeof number1 === 'string' && typeof number2 === 'string') {
        console.log(parseFloat(number1) + parseFloat(number2));
    } else if (typeof number1 === 'number' && typeof number2 === 'number') {
        console.log(number1 + number2);
    } else {
        console.log('Error');
    }

}
sum("10", "50");
sum(10, 50);
sum("10", 50);*/

/*function operations(array: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === 'sum') {
            const sum = array.reduce((numero, total) => numero + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = array.reduce((numero, total) => numero * total);
            console.log(multiply);
        } else if (operation === 'minus') {
            const minus = array.reduce((numero, total) => numero - total);
            console.log(minus);
        } else if (operation === 'median') {
            const median = array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
            console.log(median);
        }
    }
    else {
        console.log('Please, choice the operation');
    }
}
operations([1, 2, 3, 4, 5], 'sum');
operations([1, 2, 3, 4, 5], 'multiply');
operations([1, 2, 3, 4, 5], 'minus');
operations([1, 2, 3, 4, 5]);
operations([1, 2, 3, 4, 5], 'median');*/

/*class Animals {
    name
    especie
    constructor(name: string, especie: string) {
        this.name = name;
        this.especie = especie;
    }
}

class Dog extends Animals {
    breed
    age
    constructor(name: string, especie: string, age: number, breed?: string,) {
        super(name, especie);
        this.breed = breed;
        this.age = age;
        if (breed) {
            this.breed = breed;
        }
        else if (breed === undefined) {
            this.breed = 'unknown';
        }
    }
}

class Cat extends Animals {
    breed
    age
    constructor(name: string, especie: string, age: number, breed?: string,) {
        super(name, especie);
        this.breed = breed;
        this.age = age;
        if (breed) {
            this.breed = breed;
        }
        else if (breed === undefined) {
            this.breed = 'unknown';
        }
    }
}

const husky = new Dog('Zeus', 'Dog', 4, 'Husky Siberiano',);
const bart = new Dog('Bart', 'Dog', 7,);
const lili = new Cat('Lili', 'Cat', 5,);


console.log(husky);
console.log(bart);
console.log(lili); */

//----------------------------------------------------------------//
/*type review = number | boolean;

function showReview(review: review) {
    if (!review) {
        console.log('You didnt rate review');
        return;
    }
    console.log('Avaliabled: ' + review)
}
showReview(5);
showReview(false);
showReview(2); */





