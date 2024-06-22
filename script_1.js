let swiper = null;

const getDimension = () => {
  if (window.innerWidth < 768) {
    return 'mobile';
  }
  if (window.innerWidth < 1280) {
    return 'tablet';
  }
  return 'desktop';
}

function initSlider() {
  if (!swiper) {
    swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        sliderCardPerView: "auto",
      },
    });
  }
}

const seeMore = document.querySelector(".see-more");
const sliderCard = document.querySelectorAll(".profit-card-item");
let visabilityFlag = false;

const toggleVisability = (initial) => {
  const startIndex = getDimension() !== 'desktop' ? 2 : 3;

  if(!initial) {
    seeMore.classList[!visabilityFlag ? 'add' : 'remove']("see-more_open")

    visabilityFlag = !visabilityFlag;
  }

  sliderCard.forEach((el, i) => {
    if (i  >= startIndex) {
      el.classList[!visabilityFlag ? 'add' : 'remove']("profit-card-item_hidden");
    }
  })  

}

window.addEventListener('resize', () => {
  if (getDimension() !== 'mobile') {
    if (swiper) {
      swiper.disable();
    }
    swiper = null;
  } else if (!swiper) {
    initSlider();
  }
})

window.addEventListener("DOMContentLoaded", function () {
  toggleVisability(true)

  if (getDimension() === 'mobile') {
    initSlider();
  }
});

seeMore.addEventListener("click", () => toggleVisability());
