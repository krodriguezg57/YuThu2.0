import {pintarDatos} from './pintarDatos.js'
let nextPageToken=""
async function consumirApi(){

    const URI='https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=adele&key=AIzaSyAd3sPDwqOJx-r28Wd8YE2ClHKqZWMjn8U&pageToken='+nextPageToken
   
    let respuesta=await fetch(URI)
    let videos=respuesta.json()
    return(videos)
 
}//items
consumirApi()
.then(videos =>pintarDatos(videos.items))


