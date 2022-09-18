document.querySelector('.btn-2').addEventListener('click', check);
document.querySelector('.btn-1').addEventListener('click', toggleScreen);
const img = document.querySelector('.tuchka');
img.addEventListener('click', toggleScreen2);

function check() {
   console.log('fullcreenEnabled: ');
   console.log(document.fullscreenEnabled);// if true - тогда браузер может переходить в развернутый, полноэкранный режим 
   console.log('fullcreenElement: ');
   console.log(document.fullscreenElement);// Показывают какие элементы находятся в полноэкранном режиме, возвращает null
   console.dir(document.fullscreenElement);
}

function toggleScreen() {
    if(document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();// возвращает корневой документ
    }
    else{
        if(document.fullscreenEnabled) {
           document.exitFullscreen();
        }
    }
}
 
function toggleScreen2() {
    if(!document.fullscreenElement) {
        img.requestFullscreen();// возвращает корневой документ
    }
    else{
        if(document.fullscreenEnabled) {
           document.exitFullscreen();
        }
    }
}

document.documentElement.addEventListener('fullscreenchange', ()=> {
    console.log('сработало')
})