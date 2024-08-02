// 1

function SumOfEven (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
             sum += array[i];
        }
    }
    return sum;
}

function Max (a, b){
    return a > b ? a : b;
}

let arr1 = [1, 1, 2, 4, 5, 5, 8, 3, 3, 5, 4]; // 18
let arr2 = [2, 2, 3, 1, 5, 6, 8, 8]; // 26

console.log(`The max even numbers sum is ${Max(SumOfEven(arr1), SumOfEven(arr2))} =)`);


// 2

function CopyString( numba, str , arr){
    
    for (let i = 0; i < numba; i++) {
        arr.push(str);        
    }
    return arr;
}

let str_arr = [];
console.log(CopyString(1337, "banana", str_arr));


// 3

function BookSelector(books){
    let max_length = 0, max_index = 0;

    for (let i = 0; i < books.length; i++) {
        if(books[i].volume > max_length){
            max_length = books[i].volume;
            max_index = i;
        }
    }
     
    return books[max_index];
}


let Books = [ 
    {
        name: "Ведьмак",
        author: "Анджей Сапковски",
        volume: 3000,
    },
    {
        name: "Обитаемый остров",
        author: "Братья Стругатские",
        volume: 400,
    },
    {
        name: "Дом в котором",
        author: "Мариам Петросян",
        volume: 1500,
    },
];

console.log(BookSelector(Books));




