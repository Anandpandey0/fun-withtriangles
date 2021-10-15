var angleOne = document.querySelector("#angle1");
var angleTwo = document.querySelector("#angle2");
var angleThree = document.querySelector("#angle3");
var submit = document.querySelector("#btn");
submit.addEventListener("click", message);

function message(){
    var angleone = Number(angleOne.value);
    var angletwo =  Number(angleTwo.value);
    var anglethree =  Number(angleThree.value);
    var sumangle = Number(angleone + angletwo + anglethree);
    if (angleone > 0 && angletwo > 0 && anglethree > 0){
        if(sumangle == 180){
            document.getElementById("output").innerHTML = "This forms a triangle";
        }
            else{
                document.getElementById("output").innerHTML = "Sed, No triangle will be formed";
            };
    }
    else{
        document.getElementById("output").innerHTML = "Please enter vaid inputs"
    }
    
    
}