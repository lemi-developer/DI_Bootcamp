//Assets:

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

robots.forEach((item, index) => {
  //the object will trigger the displaying of each card through forEach
  let displayCardDiv = document.createElement("div");
  let displayImage = document.createElement("img");
  let displayName = document.createElement("h3");
  let displayEmail = document.createElement("p");

  displayCardDiv.id = `cardNumber${index}`;
  displayImage.src = robots[index].image;
  displayName.innerHTML = robots[index].name;
  displayEmail.innerHTML = robots[index].email;

  document.body.appendChild(displayCardDiv);
  document.getElementById(`cardNumber${index}`).appendChild(displayImage);
  document.getElementById(`cardNumber${index}`).appendChild(displayName);
  document.getElementById(`cardNumber${index}`).appendChild(displayEmail);
});

function filter() {
  let input, stringSearchedByUser, i, robotName;
  input = document.getElementById("myInput"); //we will capture the input on the searchbar every time it is changed
  stringSearchedByUser = input.value.toUpperCase(); //the captured value will be converted to all uppercase, as the comparison will be made in all uppercase values
  arrayOfH3 = document.getElementsByTagName("h3"); //h3 coincides with the sole tag which holds robot Names, here we have their array

  for (i = 0; i < arrayOfH3.length; i++) {
    h3Element = arrayOfH3[i]; //here, each element of the array with robot name elements
    robotName = h3Element.textContent || h3Element.innerText; //here, we isolate the text for the name itself
    if (robotName.toUpperCase().indexOf(stringSearchedByUser) > -1) {
      //both the search and robot name are compared in uppercase so as to ignore all difference between upper and lower case
      // -1 means that the "indexOf" method will look for the index of the searched combination of characters and not find it
      h3Element.parentElement.style.display = ""; // we refer to the parent element "div" since wed like the entire div of that particular h3 to disappear
    } else {
      h3Element.parentElement.style.display = "none";
    }
  }
}
