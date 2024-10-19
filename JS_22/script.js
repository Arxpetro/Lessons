
const canvas = document.querySelector("#myCanvas")

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawing();
  })

  // drawing();
  function drawing() {
    // getContext -> 2d
    const ctx = canvas.getContext("2d");
    // strokeRect
    // x, y, width, height
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.strokeRect(80, 190, 100, 50);

    // fillRect
    // x, y, width, height
    ctx.strokeStyle = "green";
    ctx.fillStyle = "green";
    ctx.globalAlpha = 0.3;
    ctx.shadowColor = "white";
    
    
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 20;
    ctx.lineWidth = 3;
    ctx.fillRect(100, 200, 300, 400);



    // ctx = canvas.getContext("2d");
    const rectHeight = canvas.height/16;
    const rectWidth = canvas.width/16;
    ctx.fillStyle = "green";
    ctx.globalAlpha = 0.3;
    ctx.shadowColor = "transparent";
    

    for(let i = 1; i < 17; i++){
        const height = rectHeight*i;
        const x = (i-1)*rectWidth;
        ctx.fillStyle = `rgb(${255 - i * 16},255,${255 - i * 16})`;
        ctx.fillRect(x, canvas.height-height, rectWidth, height);
    }
    
    // const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(150,200);
    ctx.lineTo(100, 350);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 8;
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(300, 400);
    ctx.lineTo(500, 200);
    ctx.lineTo(700, 400);
    ctx.lineTo(300, 400);
    ctx.fillStyle = "green";
    ctx.fill();

    //const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(500, 500 ,100, 0, 2 *  Math.PI)
    // Math.PI - 180
    ctx.stroke();
  }
  drawing();


















