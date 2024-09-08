
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const number = document.getElementById("number");

if(!localStorage.getItem("Numba")){
    localStorage.setItem("Numba", 0);
}

number.innerText = localStorage.getItem("Numba");

btnMinus.onclick = () => {
    localStorage.setItem("Numba", +localStorage.getItem("Numba") - 1);
    number.innerText = localStorage.getItem("Numba");
}

btnPlus.onclick = () => {
    localStorage.setItem("Numba", +localStorage.getItem("Numba") + 1);
    number.innerText = localStorage.getItem("Numba");
}






