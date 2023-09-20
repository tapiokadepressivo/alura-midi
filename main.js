function tocaSomPom (seletorAudio) {
  document.querySelector(idElementoAudio).play();
}

  const listaDeTeclas = document.querySelectorAll('.tecla');

//para
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#Som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom (idAudio0;
    }

  }
