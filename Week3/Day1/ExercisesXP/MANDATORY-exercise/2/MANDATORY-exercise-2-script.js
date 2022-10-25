//Exercise 2 : Users and style

//( 2.1 ) The HTML

// ( 2.2 )

function styleDiv(childNumber, backgroundColor, padding) {
  let content = document.body.children[childNumber];
  console.log(content.style.backgroundColor);
  console.log(content.style.padding);
  content.style.backgroundColor = `${backgroundColor}`;
  content.style.padding = `${padding}`;
  console.log(content.style.backgroundColor);
  console.log(content.style.padding);
}

// ( 2.3 )
function styleDisplayOfLine(childNumber1, childNumber2, stringValue) {
  let content = document.body.children[childNumber1].children[childNumber2];
  console.log(content);
  content.style.display = `${stringValue}`;
  console.log(content);
}

// ( 2.4 )

function styleBorderOfLine(childNumber1, childNumber2, stringValue) {
  let content = document.body.children[childNumber1].children[childNumber2];
  console.log(content);
  content.style.border = `${stringValue}`;
  console.log(content);
}

// ( 2.5 )

function styleBody(stringValue) {
  let content = document.body;
  console.log(content);
  content.style.fontSize = `${stringValue}`;
  console.log(content);
}

// ( 2.6 )

function alertMessage() {
  if (document.body.children[0].style.backgroundColor == "lightblue") {
    alert(
      `Hello ${document.body.children[1].children[0].innerHTML} and ${document.body.children[1].children[1].innerHTML}`
    );
  }
}
