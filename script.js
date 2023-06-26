function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    //se tiver light mode add img light
    img.setAttribute('src','./assets/kael.png')//para modificar o atributo
  }else{
    //se tiver sem ligh mode, manter a img normal
    img.setAttribute('src','./assets/carlos.png')
  }
  //pegar a tag imagem e substituir a img
}
