
//1

class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    
    addMoney(toAdd){
        this.balance += toAdd;
    }
    withdraw(toWithdraw){
        this.balance -= toWithdraw;
    }
    getBalance(){
        return this.balance;
    }

}

const myAcc = new BankAccount(500, 1);
console.log(myAcc.getBalance());
myAcc.addMoney(300);
myAcc.withdraw(200);
console.log(myAcc.getBalance(),"||");

//2
class Student{
    grades = [];
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    addGrade(grade){
        if (grade > 0 && grade <=100) {
            this.grades.push(grade);
        }else{
            console.log("Grade is not valid");
            throw new Error("Grade is not valid");
        }
    }
    getAverageGrade(){
        return this.grades.reduce((acc, curr)=> acc + curr, 0) / this.grades.length;
    }
}

const peter = new Student("Peter", 19, "peter@gmail.com");
peter.addGrade(99);
peter.addGrade(89);
peter.addGrade(100);
console.log(peter.grades);
console.log("avg:" ,peter.getAverageGrade());

//peter.addGrade(0);
//peter.addGrade(1000);

//3
class ShoppingCart{
    items = [];
    totalPrice = 0;

    addItem(item){
        if(item.hasOwnProperty('name') && item.hasOwnProperty('price')){
            this.items.push(item);
            this.totalPrice += item.price;
        }else{
            throw new Error("wrong Item format");
        }
        
    }
    removeItem(item){
        if(('name' in item) && ('price' in item)){
            for (let i = 0; i < this.items.length; i++) {
                if(this.items[i].name === item.name){
                    this.totalPrice -= item.price;
                    this.items.splice(i,1); 
                }
            }
        }else{
            throw new Error("wrong Item format");
        }
    }
}

const cart = new ShoppingCart();

cart.addItem({name: "guitar", price: 100});
cart.addItem({name: "celo", price: 150});
cart.addItem({name: "flute", price: 40});

console.log(JSON.stringify(cart.items));

cart.removeItem({name: "celo", price: 150});

console.log(JSON.stringify(cart.items));