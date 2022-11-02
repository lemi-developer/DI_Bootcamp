const yellowBox = document.getElementById("target");
const redbox = document.getElementById("box");

yellowBox?.addEventListener("dragover", handleDragEnter);
yellowBox.addEventListener("dragenter", handleDragEnter);
yellowBox.addEventListener("dragleave", handleDragLeave);
yellowBox.addEventListener("drop", handleDrop);

function handleDragLeave(event) {
  event.preventDefault();
  console.log("dragLeave");
}
function handleDragEnter(event) {
  event.preventDefault();
  yellowBox.classList.add("is-hovered");
}

function handleDrop(event) {
  yellowBox.classList.remove("is-hovered");
  yellowBox.append(box);
}
