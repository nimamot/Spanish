var button = document.querySelector(".button");

var answer1 = document.querySelector(".contigo");
var answer2 = document.querySelector(".visto");
var answer3 = document.querySelector(".fracaso");
var answer4 = document.querySelector(".mente");
var answer5 = document.querySelector(".alguien");
var answer6 = document.querySelector(".convencido");
var answer7 = document.querySelector(".ratito");

var answer8 = document.querySelector(".marcharme");

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var box7 = document.querySelector(".box7");
var box8 = document.querySelector(".box8");

button.onclick = function () {
  answer1.innerHTML = "(contigo)";
  answer2.innerHTML = "(visto)";
  answer3.innerHTML = "(fracaso)";
  answer4.innerHTML = "(preguntes)";
  answer5.innerHTML = "(mente)";
  answer6.innerHTML = "(convencido)";
  answer7.innerHTML = "(ratito)";
  answer8.innerHTML = "(marcharme)";

  // if Statement1
  if (box1.value == "contigo") {
    box1.style.color = "green";
  } else {
    box1.style.color = "red";
  }

  // if statement 2
  if (box2.value == "visto") {
    box2.style.color = "green";
  } else {
    box2.style.color = "red";
  }
  //
  //   // if Statement3
  if (box3.value == "orgullo") {
    box3.style.color = "green";
  } else {
    box3.style.color = "red";
  }
  //
  // if Statement4
  if (box4.value == "impaciente") {
    box4.style.color = "green";
  } else {
    box4.style.color = "red";
  }
  //
  //   // if Statement5
  if (box5.value == "alguien") {
    box5.style.color = "green";
  } else {
    box5.style.color = "red";
  }
  //
  //   // if Statement6
  if (box6.value == "prohibido") {
    box6.style.color = "green";
  } else {
    box6.style.color = "red";
  }
  //
  //   // if Statement7
  if (box7.value == "duele") {
    box7.style.color = "green";
  } else {
    box7.style.color = "red";
  }
  //
  //   // if Statement8
  //   if (box8.value == "tirada"){
  //     box8.style.color = "green";
  //   }
  //   else{
  //     box8.style.color = "red";
  //   }
  //
  //
};
