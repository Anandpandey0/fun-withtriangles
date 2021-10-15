var baseVal = document.querySelector("#base");
var heightVal = document.querySelector("#height");
var submit = document.querySelector("#btn");
submit.addEventListener("click", calculateHypotenuse);
function calculateHypotenuse(){
    // console.value(baseVal.value);
    var baseval = Number(baseVal.value);
    var heightval = Number(heightVal.value);
    var basesqr = baseval ** 2;
    // console.log(basesqr);
    var heightsqr = heightval ** 2;
    // console.log(heightsqr);
    var sum = basesqr + heightsqr;
   var hypotenuse = Math.sqrt(sum);
   if(baseval > 0 && heightval > 0){
    document.getElementById("output").innerHTML = "Hypotenuse will be " + hypotenuse ;
   }
   else{
    document.getElementById("output").innerHTML = "OOPS , Please give valid Inputs."
   }
   
}
