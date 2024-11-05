import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
Swiper.use(Autoplay);
let swipperHorizontal, swipper1, swipper2, swipper3;

const configHorizontal = {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 17000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
};
const configswiper1 = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
};
const configswiper2 = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 17000,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
};
const configswiper3 = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  ally: false,
  freeMode: true,
  speed: 13000,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
};

const breakpoint = window.matchMedia("(max-width:1024px)");
const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    swipperHorizontal = new Swiper(
      "#testimonial-swiper-horizontal",
      configHorizontal
    );
    if (swipper1 !== undefined) swipper1.destroy(true, true);
    if (swipper2 !== undefined) swipper2.destroy(true, true);
    if (swipper3 !== undefined) swipper3.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    const swipper1 = new Swiper("#testimonial-swiper1", configswiper1);
    const swipper2 = new Swiper("#testimonial-swiper2", configswiper2);
    const swipper3 = new Swiper("#testimonial-swiper3", configswiper3);
    if (swipperHorizontal !== undefined) swipperHorizontal.destroy(true, true);
    return;
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
export default testimonialSwiper;
