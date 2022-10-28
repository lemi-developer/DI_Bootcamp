// Exercise 2 : Work with forms

// ( 1 )  Retrieve the form and console.log it
function retrieveForm() {
  let elementForm = document.body.children[0];
  console.log(elementForm);
}
// ( 2 )  Retrieve the inputs by their id and console.log them
function allForInputs() {
  let allInput = document.body.children[0].querySelectorAll("input");
  console.log(allInput);
}
// ( 3 ) Retrieve the inputs by their name attribute and console.log them
function retrieveNameFromInput() {
  let allInput = document.body.children[0].querySelectorAll("input");
  allInput.forEach((inputElement) => {
    console.log(inputElement.name);
  });
}
// ( 4 )
function mySubmit(event) {
  // ( 4.1 ) we use preventDefault to prevent the Form's designated action from being performed
  event.preventDefault();
  /*console.log("Form has been submitted");*/
  // ( 4.2 ) get the values of the input tags
  let formData = [
    document.getElementById("fname").value,
    document.getElementById("lname").value,
  ];

  //( 4.3 ) make sure that they are not empty
  if (formData[0] == "" || formData[1] == "") {
    alert("At least one form field is missing!");
  }
  //console.log(formData);

  //( 4.4 ) create an li per input value
  let displayInList1 = document.createElement("li");
  let displayInList2 = document.createElement("li");

  displayInList1.innerHTML = formData[0];
  displayInList2.innerHTML = formData[1];

  // ( 4.5 ) then append them to a the <ul class="usersAnswer"></ul>, below the form.
  document.getElementsByClassName("usersAnswer")[0].appendChild(displayInList1);

  document.getElementsByClassName("usersAnswer")[0].appendChild(displayInList2);
}
