// let hamMenu = document.querySelector('.ham-menu');
// let displayMenu = document.querySelector('.ham-menu-mobile');

// // Toggle menu visibility on click
// hamMenu.addEventListener('click', function () {
//     hamMenu.style.cursor = "pointer";
    
//     // Toggle display state
//     if (displayMenu.style.display === "none" || displayMenu.style.display === "") {
//         displayMenu.style.display = "inline-block";
//         displayMenu.style.position = "fixed";
//     } else {
//         displayMenu.style.display = "none";
//     }
// });


let hamMenu = document.getElementById("ham-menu");
let mobileMenu = document.querySelector(".ham-menu-mobile");

hamMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active"); // Toggle the visibility
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-info');

  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const extraInfo = this.nextElementSibling;
      if (extraInfo.style.display === "block") {
        extraInfo.style.display = "none";
        this.textContent = "More Info";
      } else {
        extraInfo.style.display = "block";
        this.textContent = "Less Info";
      }
    });
  });
});
