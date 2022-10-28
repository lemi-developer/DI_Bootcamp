/* (3.2) Create a function called getBold_items() that takes no parameter. This function
should collect all the bold items inside the paragraph and assign them to the 
allBoldItems variable*/
function getBold_items() {
  let allBoldItems = document.querySelectorAll("strong");
  console.log(allBoldItems);
  return allBoldItems;
}
//(3.3)Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
  let allBoldItems = document.querySelectorAll("strong");
  allBoldItems.forEach((boldItem) => (boldItem.style.color = "blue"));
}
//(3.4)Create a function called return_normal() that changes the color of all the bold text back to black
function return_normal() {
  let allBoldItems = document.querySelectorAll("strong");
  allBoldItems.forEach((boldItem) => (boldItem.style.color = "black"));
}
