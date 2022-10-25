//Exercise 1 : Users

// ( 1 ) The .html file

// ( 2.1 )

function consoleLog(idOfHtmlElement) {
  let content = document.getElementById(idOfHtmlElement).textContent;
  console.log(content);
}

//consoleLog("container");

// ( 2.2 )

function changeTheName(childNumber1, childNumber2, newTextContent) {
  let elementToBeChanged =
    document.body.children[childNumber1].children[childNumber2];
  console.log(elementToBeChanged.textContent);
  elementToBeChanged.textContent = newTextContent;
  console.log(elementToBeChanged.textContent);
  console.log("Name has been changed");
}

//changeTheName(1, 1, "Richard");

// ( 2.3 )
//changeTheName(1, 0, "LemiDev");
//changeTheName(2, 0, "LemiDev");

//( 2.4 )

function removeTheName(childNumber1, childNumber2) {
  let elementToBeRemoved =
    document.body.children[childNumber1].children[childNumber2];
  console.log(elementToBeRemoved);
  elementToBeRemoved.remove();
  console.log("Name has been removed");
}

//removeTheName(2, 1);

//( 3.1 )

function addClassToElement(childNumber, classToAdd) {
  let elementToAddClass = document.body.children[childNumber];
  console.log(elementToAddClass.classList);
  elementToAddClass.classList.add(classToAdd);
  console.log(elementToAddClass.classList);
  console.log(`${classToAdd} Class has been added`);
}

//addClassToElement(1, "student_list")
//addClassToElement(2,"student_list")

//( 3.2 )

//addClassToElement(1, "university")
//addClassToElement(1,"attendance")
