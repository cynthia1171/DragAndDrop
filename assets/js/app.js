 


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var numeroDeImagenes = $('#contenedorImagenes img').length;
  if(numeroDeImagenes <= 2 ){
    console.log(numeroDeImagenes);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }else{
    alert("maximo");
  }
}

const iniciar = () => {
  window.location = 'principal.html';
  return false;
};

