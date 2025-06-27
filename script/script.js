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

// basket 

const basketBlock = document.querySelector('.basket-block');
const basketClose = document.querySelectorAll('.basket-close');
const basketOpen = document.querySelectorAll('.basket-open');

function closeBasket() {
  basketBlock.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function openBasket() {
  basketBlock.classList.add('active');
  document.body.style.overflow = 'hidden';
}

basketClose.forEach(c => c.onclick = () => closeBasket());
basketOpen.forEach(c => c.onclick = () => openBasket());