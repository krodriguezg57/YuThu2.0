

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
    
        let separador = document.createElement("hr")
        separador.classList.add("w-75")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")
        separador.classList.add("border")
        separador.classList.add("text-dark")
    
    
        let nombre = document.createElement("h5")
        nombre.classList.add("text-dark")
        nombre.classList.add("fw-bold")
        nombre.classList.add("text-center")
        nombre.textContent = video.snippet.title
    
        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("text-center")
    
        let preview = document.createElement("audio")
        preview.src = cancion.preview_url
        preview.setAttribute("controls", "controls")
    
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        cuadroTexto.appendChild(nombre)
        cuadroTexto.appendChild(preview)
    
    
    
        columna.appendChild(tarjeta)
        videoContainer.appendChild(columna)
    
    
    })
}



