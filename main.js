function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  if(elemento && elemento.localName === 'audio'){
    elemento.play();
  }
  else {
    console.log('elemento ou seletor não encontrado!');
  }
  
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code ==='Space') {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
