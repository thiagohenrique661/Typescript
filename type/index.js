function showProduct(product) {
    console.log("Name: ".concat(product.name, " \nBrand: ").concat(product.brand, " \nPrice: $").concat(product.price, " \nDescription: ").concat(product.description));
}
var productObj = {
    name: 'Iphone',
    brand: 'Apple',
    price: 2500,
    description: "Iphone 13"
};
showProduct(productObj);
