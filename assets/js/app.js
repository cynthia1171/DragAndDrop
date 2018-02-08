
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var numeroDeImagenes = $('#contenedorImagenes img').length;
  if(numeroDeImagenes <= 3 ){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }else{
    alert("maximo");
  }
}

const iniciar = () => {
  var user = document.getElementById('user').value;
  var password = document.getElementById('key').value;

  if (user === '' || (password == "") || (password == 123456) || (password.length<6)) {
    alert('Usuario ó contraseña incorrectos');
  } else {
    window.location.href='principal.html';
  }
};

