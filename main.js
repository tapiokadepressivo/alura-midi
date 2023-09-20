function tocaSomPom (seletorAudio) {
  document.querySelector(idElementoAudio).play();
}

if(elemento && elemento.localName    'audio') {
  elemento.play();
}
else

  console.log('elemento nâo encontrado ou seletor inválido'):
}
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
