var menu = document.querySelector('.main-nav');
var menuBtn = document.querySelector('.header__btn');

menu.classList.add('main-nav--hidden');

var toggleMenuClasses = function () {
    if (menuBtn.display = 'block') {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('header__btn--close');
            menu.classList.toggle('main-nav--hidden');
        })
    }
}

toggleMenuClasses();

var beforeImg = document.querySelector('.results__img--before');
var afterImg = document.querySelector('.results__img--after');
var switcher = document.querySelector('.results__input');

var opacityChange = function (el) {
    el.classList.remove('results__img--hidden');
    el.style.opacity = 0.5;
}

var onSlidesChange = function () {
  afterImg.style.opacity = 1;
  beforeImg.style.opacity = 1;
  if (switcher.value < 35) {
    afterImg.classList.add('results__img--hidden');
    beforeImg.classList.remove('results__img--hidden');
  } else if ((switcher.value > 35) && (switcher.value < 65)){
    opacityChange(beforeImg);
    opacityChange(afterImg);
  } else {
    afterImg.classList.remove('results__img--hidden');
    beforeImg.classList.add('results__img--hidden');
  }
}

if (switcher) {
  switcher.addEventListener('change', onSlidesChange);
}
