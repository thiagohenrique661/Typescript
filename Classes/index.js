"use strict";
/* CLASSE
class User {
    name!: string;
    nationality!: string
    profession?: string;
    age!: number;
}

const Thiago = new User();
console.log(Thiago);

Thiago.name = 'Thiago';
Thiago.nationality = 'Brazilian';
Thiago.profession = 'Developer';
Thiago.age = 24;*/
/* ------------------------------- CLASSES E CONSTRUCTOR-------------------------------
class NewUser {
    name: string;
    nationality: string;
    profession: string;
    age: number;

    constructor(name: string, nationality: string, age: number, profession: string,) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.age = age;
    }
};

const Thiago = new NewUser('Thiago', 'Brazilian', 24, 'Developer');
console.log(Thiago);*/
/*--------------------------------REANDONLY----------------------------------------------------
class Car {
    brand
    readonly wheels = 4

    constructor(brand: string) {
        this.brand = brand;
    }
}

const BMW = new Car("BMW");
console.log(BMW);
*/
/*
class Machine {
    id
    serialNumber
    Machine
    Type

    constructor(id: number, Machine: string, serialNumber: string, Type: string) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.Machine = Machine;
        this.Type = Type;
    }
    showDetails() {
        console.log(`Id: ${this.id}\nSerial Number: ${this.serialNumber}\nMachine: ${this.Machine}\nType: ${this.Type}`);
    }

}

const Prensa400 = new Machine(1, "connectv_123", "Prensa400T", "Golpes");
Prensa400.showDetails();
*/
/*
class Machine {
    id
    serialNumber
    Machine
    Type

    constructor(id: number, serialNumber: string, Machine: string, Type: string) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.Machine = Machine;
        this.Type = Type;
    }
    get Informations() {
        return `Id: ${this.id}\nSerial Number: ${this.serialNumber}\nMachine: ${this.Machine}\nType: ${this.Type}`;
    }
}
const Prensa400 = new Machine(1, "connectv_123", "Prensa400T", "Golpes");
console.log(Prensa400.Informations);
*/
/*
class Detritos {

    x!: number;
    y!: number;

    set fillX(x: number) {
        if (x === 0) {
            return
        }
        this.x = x;

        console.log("X inserido com sucesso!");
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }
        this.y = y;

        console.log("Y inserido com sucesso!");
    }
}

const myCoords = new Detritos()

myCoords.fillX = 15;
myCoords.fillY = 0;

console.log(myCoords);
*/
