// var c = document.getElementById("backgroundCanvas");
// var ctx = c.getContext("2d");
// const squareWidth = 75;
// const canvasWidth = 100;
const projectile = document.querySelector(".projectileObject");
let angle = 45;
let velocity = 30;
let velocityX = 0;
let velocityY = 0;
let xConstantSpeed = 0;
let posY = 0;
const g = 9.8;
let t = 1/60;
console.log(Math.sin(angle*Math.PI / 180));

// function drawBackground() {
//     ctx.strokeStyle = "hsla(0, 0%, 33%, 0.05)";
//     for(let i = squareWidth; i < canvasWidth; i+= squareWidth) {
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, canvasWidth)
//         ctx.stroke();
//         ctx.moveTo(0, i);
//         ctx.lineTo(canvasWidth, i);
//     }
// }

function moveProjectile() {
    posY = (velocityY*t) + ((g * t**2) / 2);
    projectile.style.transform = `translate(${velocityX}px, ${posY*100}px)`;
    velocityX += xConstantSpeed/6 * 10; 
    t += 1/60;
    
    requestAnimationFrame(moveProjectile);
}

document.querySelector("#launch").addEventListener("click", () => {
    console.log("hello");
    angle = document.querySelector("#angle").value;
    velocity = document.querySelector("#velocity").value;
    velocityX = Math.cos(angle*Math.PI / 180) * velocity;
    velocityY = -(Math.sin(angle*Math.PI / 180) * velocity);
    console.log(velocityX, velocityY);
    
    xConstantSpeed = velocityX;

    window.requestAnimationFrame(moveProjectile);

})