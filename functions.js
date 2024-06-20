//HAMBURGER MENU
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navPrimary = document.querySelector(".nav-primary");
  const menuItems = document.querySelectorAll(".nav-primary ul li a");

  hamburger.addEventListener("click", function() {
      navPrimary.classList.toggle("active");
  });

  menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
          navPrimary.classList.remove("active");
      });
  });
});



//SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}