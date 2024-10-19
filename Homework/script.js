
// 1
class Person {
    static oldestPerson = new Person("noname","noname",0);
    static compareAge(p1,p2){
        const ageDif = p1.age - p2.age;
        return ageDif > 0 ? ageDif: -ageDif;
    }
    constructor(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
        if (Person.oldestPerson && Person.oldestPerson.age < age) {
            Person.oldestPerson.firstName = fn;
            Person.oldestPerson.lastName = ln;
            Person.oldestPerson.age = age;
        }        
    }
}

const peter = new Person("Peter", "Minin", 19);
const vova = new Person("Vova", "Minin", 13);

console.log(Person.oldestPerson);
console.log(Person.compareAge(peter, vova),Person.compareAge(vova, peter));

// 2
class Book{
    static books = [];
    static listAuthors(){
        return Book.books.map((book)=>book.author);
    }
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        Book.books.push(this);
    }
}

let b1 = new Book("Witcher1","Angrey Sapkovski0", 1998);
let b2 = new Book("Witcher2","Angrey Sapkovski1", 2000);
let b3 = new Book("Witcher3","Angrey Sapkovski2", 2003);

console.log(Book.books);
console.log(Book.listAuthors());






















