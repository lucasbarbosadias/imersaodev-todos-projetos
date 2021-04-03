function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  
  validaFilme(filmeFavorito)
}

function validaFilme(filme) {
  if (filme.endsWith('.jpg')){
    listarFilmesNaTela(filme)
  } else {
    alert("Imagem Inválida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
}