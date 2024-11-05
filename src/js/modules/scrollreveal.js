import ScrollReveal, { reveal } from "scrollreveal";
ScrollReveal({
  distance: "60px",
  duration: 2800,
});

function ScrollRevealFunc() {
  ScrollReveal().reveal(" .hero__desc", {
    origin: "top",
  });
  ScrollReveal().reveal(".subscription", {
    origin: "right",
  });

  ScrollReveal().reveal(".satisfied, .hero__product", {
    origin: "left",
  });
  ScrollReveal().reveal(".scroll", {
    origin: "bottom",
  });
}
export default ScrollRevealFunc;
