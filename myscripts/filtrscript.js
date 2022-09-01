const filtrBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (ev) => {
    //Проверка, что мы клацаем мимо, а не по атрибуту <li>
        if(ev.target.tagName !== "LI") {
        return false;
        }
    // По флагу data присваиваем класс цвета
    let filtrClass = ev.target.dataset['f'];
    console.log(filtrClass);
// Перебираем все элементы Box
    filtrBox.forEach((el) => {
        //Удаляем  клвезде класс hide, перед переборкой колекции
        el.classList.remove('hide');
        // Если елемент не содержит выбранный класс цвет, то скрываем
        // добавляя класс hide
        if(!el.classList.contains(filtrClass) && filtrClass !== 'all') {
            el.classList.add('hide');
        }
    });
});