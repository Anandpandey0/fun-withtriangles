var firstSide = document.querySelector("#firstSide");
var secondSide = document.querySelector("#secondSide");
var thirdSide = document.querySelector("#thirdSide");
var submit = document.querySelector("#btn");
submit.addEventListener("click", message);

function message() {
    // console.log(firstSide.value);
    // console.log(secondSide.value);
    // console.log(thirdSide.value);
    var firstside = Number(firstSide.value);
    var secondside = Number(secondSide.value);
    var thirdside = Number(thirdSide.value);
    var area = firstside * secondside * thirdside;
    if (firstside > 0 && secondside > 0) {
        document.getElementById("output").innerHTML = "Area will be " + area;
    }else{
        document.getElementById("output").innerHTML = "Please enter valid inputs";
    }
}