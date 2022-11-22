/* Exercise 4 : Welcome
Instructions

John has just signed in to your website and you want to welcome him.

    Create a Bootstrap Navbar in your HTML file.
    In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
    The function should add a div in the nabvar, displaying the name of the user and his profile picture.
*/

(function () {
  const paragraph = document.createElement("p");
  paragraph.innertext = "Ben";

  const image = document.createElement("img");
  image.src =
    "https://i.picsum.photos/id/377/200/200.jpg?hmac=rcJQMvK0zOsZkiVu3ncmb8j3LjiGAySY2-TqaHP5jnw";

  const navbar = document.querySelector(".navbar");

  navbar.appendChild(paragraph);
  navbar.appendChild(image);
})();
