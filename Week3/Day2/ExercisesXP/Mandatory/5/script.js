function timeString() {
  document.getElementById("pressForTime()").innerHTML = Date();
}
function pressForTime() {
  document.getElementById("pressForTime").addEventListener("click", timeString);
}

//
function alertOne() {
  alert("Alert Number One");
}

function alertTwo() {
  alert("Alert Number Two");
}

function displayTwoAlerts() {
  let x = document.getElementById("displayTwoAlerts");
  x.addEventListener("click", alertOne);
  x.addEventListener("click", alertTwo);
}

//
function mouseIn() {
  document.getElementById("mouseRegister()").innerHTML += "Moused over!<br>";
}

function clicked() {
  document.getElementById("mouseRegister()").innerHTML += "Clicked!<br>";
}

function doubleclicked() {
  document.getElementById("mouseRegister()").innerHTML += "Double Clicked!<br>";
}

function mouseOut() {
  document.getElementById("mouseRegister()").innerHTML += "Moused out!<br>";
}

function mouseRegister() {
  const x = document.getElementById("mouseRegister");
  x.addEventListener("mouseover", mouseIn);
  x.addEventListener("click", clicked);
  x.addEventListener("dblclick", doubleclicked);
  x.addEventListener("mouseout", mouseOut);
}

//

function modifyTitle() {
  document.getElementById("title").style.color = "blue";
  document.getElementById("title").style.position = "center";
  document.getElementById("title").style.fontSize = "35px";
}
