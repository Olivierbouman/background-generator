

var css = document.querySelector("h3");
var button = document.querySelector("button");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


body.onload = changeColor()
color1.addEventListener("input", changeColor)
color2.addEventListener("input", changeColor)
button.addEventListener("click", randomColor)


function changeColor(){
    body.style.background = "linear-gradient(to right, "
    + color1.value
    +", "
    + color2.value
    +")"
    css.textContent = body.style.background + ";";
}

function randomColor(){
    body.style.background = "linear-gradient(to right, "
    + getRandomColor()
    +", "
    + getRandomColor()
    +")"
    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var color = "rgb(" +
      randomNumber() + ','+
      randomNumber() + ','+
      randomNumber() + ')'
    return color;
}

function randomNumber(){
    return  Math.floor(Math.random() * 255)
}

