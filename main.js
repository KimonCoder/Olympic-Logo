canvas = document.getElementById("myCanvas");


ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.rect(70,100 ,430,200);
    ctx.stroke();

color1 = "blue";

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 10;
ctx.arc(180,180,40,0,2*Math.PI)
ctx.stroke();

color2 = "black";

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 10;
ctx.arc(270,180,40,0,2*Math.PI)
ctx.stroke();

color3 = "red";

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 10;
ctx.arc(360,180,40,0,2*Math.PI)
ctx.stroke();

color4 = "yellow";

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 10;
ctx.arc(225,220,40,0,2*Math.PI)
ctx.stroke();

color5 = "green";

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 10;
ctx.arc(315,220,40,0,2*Math.PI)
ctx.stroke();

