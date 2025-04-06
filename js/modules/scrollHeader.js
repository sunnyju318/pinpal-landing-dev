
export function handleScrollHeader() {
  const header = document.querySelector("header");
  const headerBtn = document.querySelector(".header-btn");
  const headerLogoIcon = document.querySelector(".logo-icon-img");
  const mapRight = document.querySelector(".map_right");
  const mapLeft = document.querySelector(".map_left");

  const stPin = document.querySelector(".st-pin");
  const ndPin = document.querySelector(".nd-pin");
  const rdPin = document.querySelector(".rd-pin");



  window.addEventListener("scroll", () => {

    const isScrolled = window.scrollY > 50;
    const isScrolledLater = window.scrollY > 150;

    header.classList.toggle("scrolled-header-bg", isScrolled)
    headerBtn.classList.toggle("scrolled-header-btn", isScrolled)
    headerLogoIcon.classList.toggle("scrolled-header-logoicon", isScrolled)
    mapRight.classList.toggle("map_right_scrolled", isScrolledLater)
    mapLeft.classList.toggle("map_left_scrolled", isScrolledLater)
    // Toggle class only if isScrolled is true or false

    if (isScrolledLater) {
      stPin.classList.add("st-pin-hide");
      ndPin.classList.add("nd-pin-hide");
      rdPin.classList.add("rd-pin-hide");
    } else {
      stPin.classList.remove("st-pin-hide");
      ndPin.classList.remove("nd-pin-hide");
      rdPin.classList.remove("rd-pin-hide");
    }

  });
}

