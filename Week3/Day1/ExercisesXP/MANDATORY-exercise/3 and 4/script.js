//Exercise 3 : Change the navbar

//( 3.1 ) The HTML

// ( 3.2 )

function changeIdOfDiv(id, newId) {
  let idOfDiv = document.getElementById(id);
  //console.log(idOfDiv);
  idOfDiv.setAttribute("id", newId);
  //console.log(idOfDiv);
}

// ( 3.3 )

function addLiToUl(idOfDiv, childNumber) {
  let newLine = document.createElement("li");
  newLine.innerHTML = "Logout";
  console.log(document.getElementById(idOfDiv).children[childNumber].children);
  document.getElementById(idOfDiv).children[childNumber].appendChild(newLine);
  console.log(document.getElementById(idOfDiv).children[childNumber].children);

  // ( 3.4) Bonus

  console.log(
    document.getElementById(idOfDiv).children[childNumber].firstElementChild
      .textContent
  );
  console.log(
    document.getElementById(idOfDiv).children[childNumber].lastElementChild
      .textContent
  );
}

// ( 4.1 )

function addEmptyDivToHtml(classOfDiv) {
  let newDivCreator = document.createElement("div");
  document.body.appendChild(newDivCreator);
  newDivCreator.setAttribute("class", classOfDiv);
  console.log(document.body.children);
}

// ( 4.4 )
function addArrayToHtml(books) {
  let newH2 = document.createElement("h2");
  document.body.children[3].appendChild(newH2);
  newH2.innerHTML = `${books.title} written by ${books.author}`;
  document.body.children[3].appendChild(newH2);
  if (books.alreadyRead == true) {
    newH2.style.color = "red";
  }
}
