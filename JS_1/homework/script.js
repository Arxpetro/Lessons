
// part 1

let age = 0;
while (age <= 0 ||isNaN(Number(age))  ) {
    age = prompt("Сколько вам лет?");
}
alert(`${age} лет это ${Number(age)*365} дней!`);

// part 2

let a = prompt("Give me a numba!"); 
while (isNaN(Number(a))) {
    a = prompt(`${a} is not a numba!`);
}

let b = prompt("Give me another numba!");
while (isNaN(Number(b))) {
    b = prompt(`${b} is not a numba!`);
}
alert(`${a} + ${b} = ${Number(a) + Number(b)}`);

// part 3 

let c = prompt("Last numba, pleease (=_=)");;
while ( isNaN(Number(c))) {
    c = prompt("I said numba! (*<=>*)");
}
alert(`${c} is a numba. Congrats.`);







