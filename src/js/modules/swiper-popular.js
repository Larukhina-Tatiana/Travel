// import Swiper JS
import Swiper from "swiper";
// import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import Swiper styles
import "swiper/css";

function swiperFunk() {
  const swiper = new Swiper("#popular-slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // Navigation arrows
    navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },
    breakpoints: {
      425: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      696: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      898: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}

export default swiperFunk;
