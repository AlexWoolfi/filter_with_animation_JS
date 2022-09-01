const animals = ["bee", "cow", "crab"];

function showAnimal(arr, elem) {
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]!== undefined){
    out += `<div> <img src="img/${arr[i]}.png"><span>${i}</span></div>`;
    }
  }
  document.querySelector(elem).innerHTML = out;
  document.querySelector(".out-1-source-length").innerHTML =
    "Длина массива " + animals.length;

  document.querySelector(".out-1-source").innerHTML =
    "const animal = [" + animals + "]";
}

showAnimal(animals, ".out-1-source-img");


function addToArray() {
    if(!Number.isInteger(+document.querySelector('.array-index').value)){
        alert('ТОлько целые числа');
        return false;
    }
  let index = parseInt(document.querySelector(".array-index").value);
  if(index>50) {
    alert('Много!!!!!!!');
  }
  else if(index<0) {
    alert('Отрицательно');
  }
  animals[index] = document.querySelector('.array-element').value;
  showAnimal(animals, '.out-1-source-img');
}

document.querySelector('.add-to-array').onclick = addToArray;
