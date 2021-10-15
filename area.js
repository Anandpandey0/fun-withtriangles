var heightInput = document.querySelector("#height");
var baseInput = document.querySelector("#base");

var submit = document.querySelector("#btn");
submit.addEventListener("click", message);

function message() {
    // console.log(firstSide.value);
    // console.log(secondSide.value);
    // console.log(thirdSide.value);
    var height = Number(heightInput.value);
    var base = Number(baseInput.value);
    var product = height * base;
    var area = 0.5 * product;
    if (height > 0 && height > 0) {
        document.getElementById("output").innerHTML = "Area will be " + area;
    }else{
        document.getElementById("output").innerHTML = "Please enter valid inputs";
    }
}