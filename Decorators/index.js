"use strict";
/*
function createdDate(created: Function) {
    created.prototype.createdAT = new Date();
}

@createdDate
class Product {
    id
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Bebida {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newProduct = new Product(1);
const bebida = new Bebida(2);

console.log(newProduct);*/
/* EXEMPLE DECORATOR  WITH METHODS
function checkifProductCreated() {
    return function (
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log("Produto já foi cadastrado!");
            } else {
                return childFunction.apply(this, args);
            }
        }
        return descriptor;
    };

}

class Product {
    alreadyPosted = false;

    @checkifProductCreated()
    product(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true;
        console.log(`Product created: ${content}`);
    }
}

const newProduct = new Product();

newProduct.product('Produto inserido!', newProduct.alreadyPosted);
newProduct.product('Segundo produto cadastrado!', newProduct.alreadyPosted);*/
/* EXEMPLE DECORATOR PROPERY
function Max(limit: number) {

    return function (
        target: Object,
        propertyKey: string
    ) {
        let value: string;
        const getter = function () {
            return value
        }
        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} digitos`);
                return
            } else {
                value = newVal;
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });


    }
}

class Admin {
    @Max(10)
    userName

    constructor(userName: string) {
        this.userName = userName;
    }
}

let admin = new Admin(`Admidddd`);

console.log(admin);*/
