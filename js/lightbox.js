/*declaro constantes */

const imagenes = document.querySelectorAll('.img_galeria')
const imagenesLight = document.querySelector('.agregar_imagen')
const contenedorLight = document.querySelector('.imagen_light')
const hamburguer1 = document.querySelector('.hamburger');

/*las imprimo por consola */
// console.log(imagenes)
// console.log(imagenesLight)
// console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click' , (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}