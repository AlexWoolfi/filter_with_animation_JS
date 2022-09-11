const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const ufo = document.querySelector('#ufo');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;

function allowDrop(event) {
    //preventDefault() для отмены стандартных событий
   event.preventDefault();
}

ufo.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
   event.target.append(document.getElementById(itemId));
}