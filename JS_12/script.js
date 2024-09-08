// const localButton = document.querySelector("#local");
// const jsButton = document.querySelector("#js");
// let number = 0;
// const numberJS = document.createElement("h3");
// numberJS.innerText ="JS NUMBER " + number;
// document.body.append(numberJS);

// jsButton.onclick = () => {
//     // if(number === 0) {
//     //     number = 1;
//     // }else {
//     //     number = 0;
//     // }
//     number = number === 0 ? 1 : 0;
//     numberJS.innerText ="JS NUMBER " + number;
// }

// const localNumber = localStorage.getItem("number");
// const numberLocal = document.createElement("h3");
// if(!localNumber) {
//     localStorage.setItem("number", 0);
// }
// numberLocal.innerText ="LOCAL NUMBER " + localNumber;
// document.body.append(numberLocal);
// localButton.onclick = () => {
//     // const currentNumber = localStorage.getItem("number");
//     // if(+currentNumber === 0) {
//     //     localStorage.setItem("number", 1)
//     // }else {
//     //     localStorage.setItem("number", 0)
//     // }
//     localStorage.setItem("number",+!Number(localStorage.getItem("number")));//инверсия

//     const localNumber = localStorage.getItem("number");
//     numberLocal.innerText ="LOCAL NUMBER " + localNumber;
// }

const form = document.querySelector('#formNumber');
const input = document.querySelector('#numberInput');


form.onsubmit = (e) => {
    e.preventDefault();
    // alert(input.value);
    localStorage.setItem("input", input.value);
}

const showInput = document.querySelector('#showInput');
const clearInput = document.querySelector('#clearInput');
let p = document.createElement('p');
document.body.append(p);
showInput.onclick = () => {
    // if(localStorage.getItem("input")){
    //     p.innerText = localStorage.getItem("input");
    // }
    // else{
    //         p.innerText ="Нет сохраненных данных";
    // }
    p.innerText = localStorage.getItem("input") || "Нет сохраненных данных";
}
clearInput.onclick = () => {
    localStorage.removeItem("input");
}













