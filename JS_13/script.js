// const user = {
//     name: "Joe"
// }
// localStorage.setItem("info", user);
// alert(user);
// JSON - Javascript Object Notation
// stringify / parse
// const user = {
//     name: "Joe"
// }
// const userString = JSON.stringify(user);
// console.log(userString);
// console.log(typeof userString);
// console.log("--------------------------------");

// const userObject = JSON.parse(userString);
// console.log(userObject);
// console.log(typeof userObject);

// const arrayStr = "[1,2,3]";
// const array = JSON.parse(arrayStr);
// array.push(4,5);
// console.log(array);

// const newStr = JSON.stringify(array);
// console.log(newStr);

function setObject(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key){
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

let books = [];

function addBook(name, price, count){
    const id = Date.now();
    const newProduct = { id, name, price, count};
    books.push(newProduct);
}

const productForm = document.querySelector("form");
const nameInput = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const countInput = document.querySelector("#productCount");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook(nameInput.value, +productPrice.value, +countInput.value);
    setObject("products", books);
    console.log(books);
    

    renderBooks();
    productForm.reset();

})

const productList = document.querySelector("#productList");

function renderBooks(productsArray = books) {
    productList.innerHTML = "";

    productsArray.forEach((product) => {
        const item = document.createElement("li");
        item.innerText = `${product.name} - ${product.price}, количество: ${product.count} `;
        productList.append(item);
    })
}

const savedProducts = getObject("products");
if(savedProducts){
    books = savedProducts;
    renderBooks();
}


const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", () => {
    // console.log(searchInput.value.toLowerCase());
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = books.filter((product) => product.name.toLowerCase().includes(searchValue))
    renderBooks(filteredProducts);
})

const sortSelect = document.querySelector("#sortSelect");

sortSelect.addEventListener("change", ()=>{
    switch (sortSelect.value){
        case "priceUp":
            books.sort((a,b) => a.price - b.price);
            break;
        case "priceDown":
            books.sort((a,b) => b.price - a.price);
            break;
        case "countUp":
            books.sort((a,b) => a.count - b.count);
            break;
        case "countDown":
            books.sort((a,b) => b.count - a.count);
            break;
        
    }
    renderBooks();
})







