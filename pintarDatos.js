export function pintarDatos(videos){
    let videoContainer = document.querySelector('#ContenedorCanciones')

    videos.forEach(video => {
    
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-60")
        imagen.classList.add("p-3")
        imagen.src = (video.snippet.thumbnails.high.url)
    
        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("text-center")

        let nombre = document.createElement("h5")
        nombre.classList.add("text-dark")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = video.snippet.title
        
        let nombreCanal = document.createElement("p")
        nombreCanal.textContent = video.snippet.channelTitle
    
        let fechaPublicacion= document.createElement("p")
        fechaPublicacion.textContent=video.snippet.publishTime
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(cuadroTexto)
        cuadroTexto.appendChild(nombre)
        cuadroTexto.appendChild(nombreCanal)
        cuadroTexto.appendChild(fechaPublicacion)
        columna.appendChild(tarjeta)
        videoContainer.appendChild(columna)
    
    
    })
}



