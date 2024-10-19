
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 1000;

const XYoffset = 140;
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset+5*i, XYoffset+5*i, 100-i*10, 100-i*10);
}
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset+5*i, XYoffset+110+10*i, 100-i*10, 100-i*10);
}
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset+110+10*i, XYoffset+5*i, 100-i*10, 100-i*10);
}
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset+110 + 10*i, XYoffset +110 + 10*i, 100-10*i, 100-10*i);
}
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset+220+10*i, XYoffset, 100-i*10, 100-i*10);
}
for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(XYoffset, XYoffset+220+10*i, 100-i*10, 100-i*10);
}

//2
const arr = [
    {
        title: 'javascript',
        amount: 150000
    },
    {
        title: 'golang',
        amount: 130000
    },
    {
        title: 'python',
        amount: 140000
    },
    
    {
        title: 'java',
        amount: 120000
    }
];

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

ctx.font = "20px serif";

for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    ctx.fillStyle = `rgb(${i * 50},${255 - i * 50},255)`;
    // console.log(Math.floor(Math.random()*255));
    
    ctx.fillRect((i+1)*100, 700,100, -elem.amount/1000);
    ctx.strokeText(elem.title,5+(i+1)*100, -10+700 );
}
ctx.strokeRect(100, 500, 400, 200);













