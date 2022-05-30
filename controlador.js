let nextPageToken=""
function getVideos(){
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=adele&key=AIzaSyBL7tDPUPcFR-ebz-CO1aFUCvvnXCumoRA&pageToken='+nextPageToken)

    .then((result) =>{
        return result.json()
    })
    .then((data)=>{
        console.log(data)
        let videos = data.items
        nextPageToken=data.nextPageToken
        let videoContainer = document.querySelector('#ContenedorCanciones')
        console.log(videos)
        videos.forEach(video => {
    
            let columna = document.createElement("div")
            columna.classList.add("col")
        
            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")
        
            let imagen = document.createElement("video")
            //imagen.classList.add("card-img-top")
            //imagen.classList.add("h-60")
            //imagen.classList.add("p-3")
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
        
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(separador)
            tarjeta.appendChild(cuadroTexto)
            cuadroTexto.appendChild(nombre)
            
        
        
        
            columna.appendChild(tarjeta)
            videoContainer.appendChild(columna)
        
        
        })
    
    })
}
getVideos()

