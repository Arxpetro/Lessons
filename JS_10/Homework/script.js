
// 1
const arr1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]
let result = arr1.map((person) => {
    person.age += 5;
    return person;
})

console.log(result);

// 2

const arr2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]

result = arr2.map((person) => person.name);
console.log(result);

// 3

const arr3 = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
]

result = arr3.filter((person) => person.age > 18);
console.log(result);

// 4

const arr4 = [
    { name: 'Alice', voted: true },
    { name: 'Bob', voted: false },
    { name: 'Charlie', voted: true },
    { name: 'Dave', voted: false }
]

result = arr4.filter((person) => person.voted );
console.log(result);

// 5 

const arr5 = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 62 },
    { name: 'Charlie', grade: 74 },
    { name: 'Dave', grade: 55 }
]

result = arr5.filter((student) => student.grade > 70);
console.log(result);

// 6

const arr6 = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
]

arr6.forEach((elem) => {
    elem.discountedPrice = elem.price * 0.9;
})
console.log(arr6);












