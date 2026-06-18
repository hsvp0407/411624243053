document.addEventListener("DOMContentLoaded", function () {

  // Get the button element by its ID
  const button = document.getElementById("myBtn");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    alert("Button clicked! 🎉");

    // Optional: Change button text after click
    button.textContent = "Clicked!";

    // Reset button text after 2 seconds
    setTimeout(function () {
      button.textContent = "Click Me";
    }, 2000);
  });

});