var h3 = document.getElementsByTagName("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById("body");
function colorListener(){
    body.style.background = "linear-gradient(to right," + color1.value +", " + color2.value + ")";
    h3[0].textContent = body.style.background;
}


color1.addEventListener('input', colorListener )
color2.addEventListener('input', colorListener )

