//2 WAYS of accessing:

// The div DOM node
const divOfBody1 = document.body.firstElementChild;
const divOfBody2 = document.body.children[0];
// The ul DOM node
const unListOfBody1 = divOfBody1.nextElementSibling;
const unListOfBody2 = document.body.children[1];
// The second li (with Pete)
const secondOfList1 = unListOfBody1.lastElementChild;
const secondOfList2 = unListOfBody2.children[1];
