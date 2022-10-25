function divOfPlanet(planet) {
  const planetDiv = document.createElement("div");
  planetDiv.setAttribute("class", planet);
  document.body.children[0].appendChild(planetDiv);
  console.log(document.body.children[0].children);
}
