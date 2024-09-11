
// 1
const obj = {
    str: "text",
    boolean: false,
    arr: [1,2,3,4,5,10],
    numba: 1337
}

localStorage.setItem("Homework Item", JSON.stringify(obj));

const getObj = JSON.parse(localStorage.getItem("Homework Item"));
console.log(getObj);

// 2

function setObject(key, obj){
    localStorage.setItem(key, JSON.stringify(obj));
}

function getObject(key){
    const object = localStorage.getItem(key);
    return JSON.parse(object);
}

function addStudent(name, subject, grade){
    const newStudent = { name, subject, grade};
    students.push(newStudent);
}

const studentForm = document.querySelector("form");
const studentName = document.querySelector("#studentName");
const subject = document.querySelector("#subject");
const grade = document.querySelector("#grade");
const btnDownload = document.querySelector("#download");
const studentList = document.querySelector("#studentList");

let students = [];
if(localStorage.getItem("students")){
    students = JSON.parse(localStorage.getItem("students"));
}

studentForm.onsubmit = function(e){
    e.preventDefault();

    addStudent(studentName.value, subject.value, +grade.value)
    // students.push({name: studentName.value, });
    setObject("students", students);
    localStorage.setItem("students", JSON.stringify(students));
    // console.log(students);
    renderList();
    studentForm.reset();
}

function renderList(){
    studentList.innerHTML = "";

    students.forEach((student) => {
        const item = document.createElement("li");
        item.innerText = `${student.name} - ${student.subject}: ${student.grade} `;
        studentList.append(item);
    })
}

btnDownload.addEventListener("click", () => {
    students = getObject("students");
    renderList();
})























