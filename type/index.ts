interface Product {
    name: string;
    brand: string;
    price: number;
    description: string;
}
function showProduct(product: Product) {
    console.log(`Name: ${product.name} \nBrand: ${product.brand} \nPrice: $${product.price} \nDescription: ${product.description}`);
}
const productObj: Product = {
    name: 'Iphone',
    brand: 'Apple',
    price: 2500,
    description: "Iphone 13"
}

showProduct(productObj);
