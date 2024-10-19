
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;
canvas.padding = "auto"
const XYoffset = 150;
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




















