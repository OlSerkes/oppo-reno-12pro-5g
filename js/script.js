const oppoReno12proAiSlider = new Swiper('.oppoReno12pro-ai-slider__swiper', {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.oppoReno12pro-ai-slider__next',
    prevEl: '.oppoReno12pro-ai-slider__prev',
  },
  scrollbar: {
    el: '.oppoReno12pro-ai-slider__scrollbar',
    draggable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 36,
    },
    600.98: {
      spaceBetween: 50,
    },
    767.98: {
      spaceBetween: 35,
    },
  },
});

const accItems = document.querySelectorAll('.accordion-oppoReno12pro__title');

accItems.forEach((item) => {
  for (let i = 0; i < accItems.length; i++) {
    accItems[i].addEventListener('click', function () {
      for (let j = 0; j < accItems.length; j++) {
        accItems[j].classList.remove('active');
        const panel = accItems[j].nextElementSibling;
        panel.style.maxHeight = null;
      }

      this.classList.add('active');

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

  accItems[0].classList.add('active');
  const defaultPanel = accItems[0].nextElementSibling;
  defaultPanel.style.maxHeight = defaultPanel.scrollHeight + 'px';
});

const oppoReno12proVidsSlider = new Swiper(
  '.oppoReno12pro-vids-slider__swiper',
  {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.oppoReno12pro-vids-slider__next',
      prevEl: '.oppoReno12pro-vids-slider__prev',
    },
    scrollbar: {
      el: '.oppoReno12pro-vids-slider__scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 36,
      },
      600.98: {
        spaceBetween: 50,
      },
      767.98: {
        spaceBetween: 20,
        slidesPerView: 2.5,
      },
    },
  }
);

let oppoReno12proRightSlider = new Swiper(
  '.right-oppoReno12pro-colors-slider__slider',
  {
    speed: 500,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  }
);
let oppoReno12proLeftSlider = new Swiper(
  '.left-oppoReno12pro-colors-slider__slider',
  {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.left-oppoReno12pro-colors-slider-pagination',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  }
);
oppoReno12proRightSlider.controller.control = oppoReno12proLeftSlider;
oppoReno12proLeftSlider.controller.control = oppoReno12proRightSlider;

const accProtectItems = document.querySelectorAll(
  '.oppoReno12pro-protection__title'
);

accProtectItems.forEach((item) => {
  for (let i = 0; i < accProtectItems.length; i++) {
    accProtectItems[i].addEventListener('click', function () {
      for (let j = 0; j < accProtectItems.length; j++) {
        accProtectItems[j].classList.remove('active');
        const panel = accProtectItems[j].nextElementSibling;
        panel.style.maxHeight = null;
      }

      this.classList.add('active');

      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

  accProtectItems[0].classList.add('active');
  const defaultPanel = accProtectItems[0].nextElementSibling;
  defaultPanel.style.maxHeight = defaultPanel.scrollHeight + 'px';
});

const oppoReno12DetailSlider = new Swiper(
  '.oppoReno12pro-detail-slider__swiper',
  {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.oppoReno12pro-detail-slider__next',
      prevEl: '.oppoReno12pro-detail-slider__prev',
    },
    scrollbar: {
      el: '.oppoReno12pro-detail-slider__scrollbar',
      draggable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 36,
      },
      600.98: {
        spaceBetween: 50,
      },
      767.98: {
        spaceBetween: 20,
      },
    },
  }
);
