var button = document.getElementById("demobutton");

let fame = document.getElementById("fname").value;

button.addEventListener("click", function(){
    alert("CONGRUTALATIONS! You clicked the button!" + fame);
})