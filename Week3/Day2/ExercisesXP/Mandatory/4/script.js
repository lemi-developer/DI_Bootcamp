function submitData(event) {
  event.preventDefault();

  let receivedValue = document.getElementById("radius").value;
  let radiusValue = parseInt(receivedValue);
  //console.log(radiusValue);
  //console.log(Math.PI);
  let answer = Math.floor((4 / 3) * Math.PI * radiusValue ** 3);
  //console.log(answer);
  let displayAnswer = document.createElement("h3");
  displayAnswer.innerHTML = `The volume is ${answer}`;
  document.getElementById("answer").appendChild(displayAnswer);
}
