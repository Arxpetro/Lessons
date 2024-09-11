function setObject(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key){
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

let books = [];

function addBook(name, author, year, pages){
    const id = Date.now();
    const newBook = { id, name, author, year, pages};
    books.push(newBook);
}

const bookForm = document.querySelector("form");
const bookName = document.querySelector("#bookName");
const bookAuthor = document.querySelector("#bookAuthor");
const bookYear = document.querySelector("#bookYear");
const bookPages = document.querySelector("#bookPages");
/*
bookName
bookAuthor
bookYear
bookPages
         */
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook(bookName.value, bookAuthor.value, +bookYear.value, +bookPages.value);
    setObject("books", books);
    console.log(books);
    

    renderBooks();
    bookForm.reset();

})

const bookList = document.querySelector("#bookList");

function renderBooks(booksArray = books) {
    bookList.innerHTML = "";

    booksArray.forEach((book) => { // тут реализовал кнопку, но есть ощущение что это костыль
        const container = document.createElement("div");
        container.className = "list-container";
        const item = document.createElement("li");
        const btnDelete = document.createElement("button");
        btnDelete.id = book.id;

        btnDelete.addEventListener("click",() => {
            console.log(book.id , btnDelete.id);
            books = books.filter((book)=> book.id != +btnDelete.id)
            setObject("books", books);
            renderBooks(books);
        })

        container.append(item, btnDelete);
        btnDelete.innerText = "x";
        item.innerText = `${book.name} - ${book.author}, ${book.year} год (${book.pages})стр.`;
        bookList.append(container);
    })
}




const savedBooks = getObject("books");
if(savedBooks){
    books = savedBooks;
    renderBooks();
}


const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", () => {
    // console.log(searchInput.value.toLowerCase());
    const searchValue = searchInput.value.toLowerCase();
    const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(searchValue))
    renderBooks(filteredBooks);
})

const sortSelect = document.querySelector("#sortSelect");

sortSelect.addEventListener("change", ()=>{
    switch (sortSelect.value){
        case "name":
            books.sort((a,b) => {
                const nameA = a.name.toUpperCase(); 
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  
                  return 0; 
            });
            break;
        case "author":
            books.sort((a,b) => {
                const nameA = a.author.toUpperCase(); 
                const nameB = b.author.toUpperCase(); 
                if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  
                  return 0; 
            });
            break;
        case "yearUp":
            books.sort((a,b) => a.year - b.year);
            break;
        case "countDown":
            books.sort((a,b) => b.year - a.year);
            break;
        
    }
    renderBooks();
})