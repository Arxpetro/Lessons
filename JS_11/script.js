



// function sortNamesByLength(names){
//     names.sort((a,b)=>a.length-b.length);
//     return names;
// }
// console.log(sortNamesByLength(["AA","AAAAA","A","AAA","AAAAAAAAAA"]));


const products = [
    {id: 1, title: "table", price: 100, marks: [2,3,4,2]},
    {id: 2, title: "PC", price: 3000, marks: [2,5,5,4]},
    {id: 3, title: "book", price: 20, marks: [3,3,4,4]},
    {id: 4, title: "bag", price: 300, marks: [1,2,3,2]}
];




products.forEach((item) => {
    item.maxMark = item.marks.reduce((acc, cur) => acc > cur ? acc: cur);
    delete item.marks;
})

console.log(products);
