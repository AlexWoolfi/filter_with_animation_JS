//РАботает как сниппет
const iframe = document.querySelector('iframe, div.player');
for(let i = 0; i < iframe.length; i++) {
   iframe[i].remove();
}
document.onclick = removeNode;

function removeNode(event) {
   event.preventDefault();
   event.target.remove();
   return false;
}