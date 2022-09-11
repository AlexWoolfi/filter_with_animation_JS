document.querySelector('.left').addEventListener('click', articleLeft);
document.querySelector('.right').addEventListener('click',articleRight);

let section = document.querySelectorAll('article section');
let sectionCount = section.length; // Нужны проверки!!!!!!!!!!
let hash = 0;// # данные в строке браузера

//Проверяем есть ли хеш при первой загрузке
if (window.location.hash) {
    hash = window.location.hash;
    hash = +hash.replace('#', ''); //получаем число
    showSection();
}

function showSection() {
    section.forEach(el => {
        el.classList.add('hide-section');
    });
    section[hash].classList.remove('hide-section');
}

//ЕСли значение хеш -1 больше равно нулю, он же старт отсчета. ТОгда кнопка работает
function articleLeft () {
  if (hash -1 >= 0) {
    hash--;
  }
  else {
    hash = sectionCount-1;
  }
  window.location.hash =  hash;
  showSection();
}
// Если увеличение хеша на 1 меньше длины всего массива, тогда правая кнопка может работать
function articleRight () {
    if(hash +1 < sectionCount) {
      hash++;
    }
    else {
      hash = 0;
    }
   window.location.hash =  hash;
    showSection();
  }
