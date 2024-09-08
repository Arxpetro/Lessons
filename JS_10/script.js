// console.log("1");
// setTimeout( () => {
//     console.log("Hello world!!")
// }, 3000);
// console.log("2");

// const button = document.querySelector("#message");
// button.onclick = () => {
//     setTimeout(() => {
//         alert("Hello world!!!!!");
//     }, 2000)
// };
// // forEach 
// const array = [1,6,58,6,8,5];
// // for(let i = 0; i < array.length; i++)
// //               array[i]
// array.forEach((element, index, arr) => {
//     console.log(element, index);
//     console.log(arr);
// })


// const arr = [1,2,6,1,1,6,2,3,4,1,5,1];
// let counter = 0;

// arr.forEach((element) => {
//     if(element === 1){
//         counter++;
//     }
// })
// console.log(counter);

// const products = [
//     {
//         title: "car",
//         price: 3000
//     },
//     {
//         title: "table",
//         price: 30
//     },
//     {
//         title: "house",
//         price: 300000
//     },
//     {
//         title: "phone",
//         price: 1500
//     },
//     {
//         title: "shoes",
//         price: 50
//     },
// ];

// const newProducts = products.filter( (item) => item.price > 1000);

// console.log(newProducts);

// let array = [1, 2,3,4,5] ;

// function arrSum(arr, index){ // считаем сумму всех элементов до заданного (index)
//     if(index >= arr.length || index < 0) return 0; // проверка на корректность индекса
//     if(index == 0){ // выход из рекурсии
//         return arr[index];
//     }
//     return arr[index] + arrSum(arr, index - 1);
// }

// console.log(array, "Elements sum: ", arrSum(array, array.length-1)); // 29
// let counter = 0; 
// for (let i = 50; i > 0; i--) {
//     counter += 100*(1/i);
//     console.log(i);
    
// }
// console.log(counter);















