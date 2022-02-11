document.addEventListener("DOMContentLoaded", function (event) { //cuando cargue el documento se ejecuta lo siguiente
  for (let i = 1; i < 5; i++) { //para las cuatro imágenes
    let thumbnailElement = document.getElementById("smart_thumbnail" + i);//obtengo la imagen+i
    if (thumbnailElement != undefined) { //cuando la imagen existe
      thumbnailElement.addEventListener("click", imageClick);//cuando se le hace click a la imagen guardada en la variable thumbnailElement se dispara la función imageClick
    }
  }
});
function imageClick() {
  const padreimagenes = this.parentNode
  if (this.className === "") {//si la imagen es grande; la achico
    this.className = "small";
    padreimagenes.className = "images_index";//implicitamente le quito "big"
  }
  else {
    //Achico las imágenes grandes
    const bigImages = document.getElementsByClassName("big")
    if (bigImages != undefined) {
      for (let i = 0; i < bigImages.length; i++) {
        bigImages[i].firstElementChild.className = "small";
        bigImages[i].className = "images_index";
      }
    }
    //Agrando la imagen a la que le hicieron click
    this.className = ""
    padreimagenes.className = "images_index big";
  }
}