//we will add an event listener to the form itself, since it has an event called "submit", to be named "handleSubmit"
//"handleSubmit" is a function which auto-receives the event that we are listening to

//RECOMMENDED TO RE-DO THIS EXERCISE

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  // e for event
  e.preventDefault(); // to prevent reloading the page
  const formData = new FormData(document.querySelector("form"));
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

  const dataString = JSON.stringify(data);
  const p = document.createElement("p");
  p.innerText = dataString;
  document.body.appendChild(p);
}
