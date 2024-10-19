function hi(s) {
    console.log(`Hello, my age is ${this.age} ${s}`);   
}
const person1 = {
    name: "Alice",
    age: 5
};
const person2 = {
    name: "Bob",
    age: 30
};
hi.call(person1, "!");
hi.call(person2, "!!!!!!");
// window.age -> undefined
hi("?");
// global object ->  window
// console.log(this); 
// методы this - call, apply, bind


hi.apply(person1, ["1", "2"]);