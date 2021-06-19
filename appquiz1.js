

var player = document.getElementById("player")
let user_Name = sessionStorage.getItem("Name")

player.innerHTML = user_Name


var Correct = document.getElementById("correct")
var getCorrect = sessionStorage.getItem("Correct")

Correct.innerHTML = getCorrect;


var pt = document.getElementById("Pt")
let getPoints = sessionStorage.getItem("points") 

pt.innerHTML = getPoints

var remark = document.getElementById("remarks")
if(getPoints >= 20){
    remarks.innerHTML = "Congratulation"
}else{
    remarks.innerHTML = "Need More Practice"
}

var percentage=document.getElementById("per")

percentage.innerHTML = getCorrect*10 + "%";