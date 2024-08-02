

const products = [
    {
        title: "nike",
        price: 300,
        type: "shoe"
    },
    {
        title: "puma",
        price: 600,
        type: "shoe"
    },
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "chanel",
        price: 1200,
        type: "bag"
    }
]
const cheap_products=[];
let sum = 0;
for (let i = 0; i < products.length; i++) {
   if (products[i].price > 1000) {
    
    console.log(`${products[i].title}, price is ${products[i].price}, product type is ${products[i].type}`);
   }
   else{
    cheap_products.push(products[i]);
   }
   sum += products[i].price;
}
console.log(sum);