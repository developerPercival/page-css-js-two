//Navbar scroll animation

//Target element
const navbar = document.querySelector(".nav--container");

// listen for scroll event
window.addEventListener("scroll", function (e) {
  e.preventDefault();

  if (window.scrollY <= 150) {
    //default

    //remove
    navbar.classList.remove("color--change");

    //add
    navbar.classList.add("color--default");
  } else {
    //Apply these rule above 150

    //remove
    navbar.classList.remove("color--default");
    //add
    navbar.classList.add("color--change");
  }
});

//Scroll animation
const containers = document.querySelectorAll(".container");

function scrollFunc() {
  const bottomTrigger = window.innerHeight / (5 * 4);

  containers.forEach((container) => {
    const boxTop = container.getBoundingClientRect().top;

    if (boxTop < bottomTrigger) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
}

scrollFunc();

window.addEventListener("scroll", scrollFunc);
