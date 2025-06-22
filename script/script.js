const swiperHome1 = new Swiper('.swiperHome1', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.home-swiper1-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.home-swiper1-next',
    prevEl: '.home-swiper1-prev',
  },
});

const swiperHome2 = new Swiper('.swiper-type1-1', {
  loop: true,
  spaceBetween: 14,
  slidesPerView: 2,
  breakpoints: {
    480: {
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-type1-1-pagination',
  },

  navigation: {
    nextEl: '.swiper-type1-1-next',
    prevEl: '.swiper-type1-1-prev',
  },
});


const swiperHome3 = new Swiper('.swiper-type1-2', {
  loop: true,
  spaceBetween: 14,
  slidesPerView: 2,
  breakpoints: {
    480: {
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-type1-2-pagination',
  },

  navigation: {
    nextEl: '.swiper-type1-2-next',
    prevEl: '.swiper-type1-2-prev',
  },
});


const aboutRightPicture = document.querySelector('.home-about_right img');

function updateImageSrc() {
  if (!aboutRightPicture) return;

  const width = window.innerWidth;

  if (width < 480) {
    aboutRightPicture.src = 'images/about-4.png';
  } else if (width < 740) {
    aboutRightPicture.src = 'images/about-3.png';
  } else if (width < 1200) {
    aboutRightPicture.src = 'images/about-2.png';
  } else if (width < 1600) {
    aboutRightPicture.src = 'images/about-1.png';
  } else {
    aboutRightPicture.src = 'images/about-0.png';
  }
}

window.addEventListener('DOMContentLoaded', updateImageSrc);
window.addEventListener('resize', updateImageSrc);

// footer

const footerTabs = document.querySelectorAll('.footer-content ul p');

footerTabs.forEach(el => {
  el.onclick = () => {
    if (!el.parentElement.classList.contains('active')) {
      footerTabs.forEach(c => c.parentElement.classList.remove('active'));
      el.parentElement.classList.add('active');
    } else {

      el.parentElement.classList.toggle('active');
    }
  }
})

// burger menu

const headerBarLi = document.querySelectorAll('.header-bar-lies li');
const headerBarBlocks = document.querySelectorAll('.header-bar_block > div');
const header = document.querySelector('header');


headerBarLi.forEach((el, ind) => {
  el.onmouseover = () => {
    headerBarBlocks.forEach(block => block.classList.remove('active'));
    headerBarBlocks[0].parentElement.classList.add('active');
    headerBarBlocks[ind].classList.add('active');
  }
})

document.addEventListener('mouseover', (e) => {
  if (!header.contains(e.target)) {
    headerBarBlocks[0].parentElement.classList.remove('active');
  }
})

const burgerBtn = document.querySelector('.burger-btn');
const burgerBlock = document.querySelector('.burger-menu-block');

burgerBtn.onclick = () => {
  burgerBlock.classList.add('active');
  document.body.style.overflow = 'hidden';
}

burgerBlock.onclick = (e) => {
  if (e.target === burgerBlock) {
    burgerBlock.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

const burgerLiOpenable = document.querySelectorAll('li.openable > p');

burgerLiOpenable.forEach(el => {
  el.onclick = (e) => {
    el.parentElement.classList.toggle('active');
  }
})