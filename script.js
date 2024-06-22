
let dialog = document.querySelector("dialog");
let modalOverlay = document.querySelector('.modal__overlay')
let modalClose = document.querySelector('.modal__close')

let btnArray = document.querySelectorAll('[type="button"]');
btnArray.forEach(function(btn) {
    btn.addEventListener('click', function() {
      dialog.show();
      modalOverlay.style.transform = "scale(1)";
    });
});

modalClose.addEventListener('click', function() {
    dialog.close();
    modalOverlay.style.transform = "scale(0)";
})

modalOverlay.addEventListener('click', function() {
  dialog.close();
  modalOverlay.style.transform = "scale(0)";
})


let menuBtn = document.querySelector('.navigation__menu');
let submenu = document.querySelector('menu');
let closeBtn = document.querySelector('.close')
let overlay = document.querySelector('.overlay')
let elMenu = document.querySelector('.navigation__menu-3')
let menuShow = false;

menuBtn.addEventListener('click', function() {
  if (menuShow == false) { 
    submenu.style.transform = "scale(1)";
    overlay.style.transform =" scale(1)";
    menuShow = true;
    elMenu.classList.add('navigation__menu-3-active');
} else {
  submenu.style.transform = "scale(0)";
  menuShow = false;
  elMenu.classList.remove('navigation__menu-3-active');
}
});

submenu.addEventListener("click",function(e) {
  if((e.target) && (e.target.nodeName == "LI" || e.target.nodeName == "A")) {
    submenu.style.transform = "scale(0)";
    menuShow = false;
    elMenu.classList.remove('navigation__menu-3-active');
  }
});

closeBtn.addEventListener('click', function() {
    submenu.style.transform = "scale(0)";
    menuShow = false;
    elMenu.classList.remove('navigation__menu-3-active');
});
overlay.addEventListener('click', function() {
  submenu.style.transform = "scale(0)";
  menuShow = false;
  elMenu.classList.remove('navigation__menu-3-active');
});


document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        submenu.style.transform = "scale(0)";
        menuShow = false;
        dialog.close();
        modalOverlay.style.transform = "scale(0)";
        elMenu.classList.remove('navigation__menu-3-active');
    }});

    let upSwiper = null;
    let downSwiper = null;

    function upSliderStart() {
       if (!upSwiper) {
        upSwiper = new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            sliderCardPerView: 'auto',
          } 
        });
       } else {
        upSwiper.disable();
        upSwiper = null;
       }
    }

    function downSliderStart() {
      if (!downSwiper) {
        downSwiper = new Swiper('.swiper-2', {
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
           sliderCardPerView: 'auto',
         } 
       });
      } else {
        downSwiper.disable();
        downSwiper = null;
      }
   }

    window.addEventListener ('DOMContentLoaded', function() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        upSliderStart();
        downSliderStart();
      } else if ((window.matchMedia("(max-width: 1280px)").matches)) {
        downSliderStart();
        
        upSwiper = null;
      } else {
        
        upSwiper = null;
        
        downSwiper = null;
      }
    });


