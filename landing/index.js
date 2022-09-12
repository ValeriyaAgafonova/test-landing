const burger = document.querySelector('.header__burger')

burger.addEventListener('click',function(){
    burger.classList.toggle('header__burger_active')
  document.querySelector('.header__menu').classList.toggle('header__menu_active')
    })