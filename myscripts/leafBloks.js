document.querySelector('.left').addEventListener('click', articleLeft);
document.querySelector('.right').addEventListener('click',articleRight);

let section = document.querySelectorAll('article section');
let sectionCount = section.length; // Нужны проверки!!!!!!!!!!
let hesh = 0;// # данные в строке браузера

//Проверяем есть ли хеш при первой загрузке
if (window.location.hash) {
    hash = window.location.hash;
    hash = +hash.replace('#', ''); //получаем число
    showSection();
}

function showSection() {
    section.forEach( el => {
        el.classList.add('hide-section');
    });
    section[hash].classList.remove('hide-section');
}

function articleLeft () {
  if(hash -1 >= 0) {
    hash--;
  }
  else {
    hash = sectionCount-1;
  }
  hash = window.location.hash;
  showSection();
}

function articleRight () {
    if(hash +1 <sectionCount) {
      hash++;
    }
    else {
      hash = 0;
    }hash = window.location.hash;
    showSection();
  }
