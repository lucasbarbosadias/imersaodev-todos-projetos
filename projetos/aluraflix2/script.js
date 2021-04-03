function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito){ 
    listarFilmesNaTela(filmeFavorito)
  } 
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listaFilmes')
  var width = 560
  var height = 315
  var title = "YouTube video player"
  var frameborder = 0
  var allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  var elementoFilme = "<iframe width=" + width + " height=" + height + " src=" + filme + " title=" + title + " frameborder=" + frameborder + " allow=" + allow + " allowfullscreen></iframe>"
  listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
}