let colors = ["royalblue","red", "black", "green", "pink", "violet"];
let btn = document.getElementById("button");

btn.addEventListener("click", () => {
    let canvas = document.getElementById("canvas");
    let index = parseInt((Math.random()*colors.length) + 1);

    canvas.style.background = `${colors[index]}`;
})