let nextPageToken=""
function getVideos(){
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=adele&key=AIzaSyCdMMphZNrr3pnMnEC9x9NO2qu03Rlntcs&pageToken='+nextPageToken)

    .then((result) =>{
        return result.json()
    })
    .then((data)=>{
        console.log(data)
        let videos = data.items
        nextPageToken=data.nextPageToken
        let videoContainer = document.querySelector('.youtube_container')
        for (video of videos) {
            videoContainer.innerHTML+=`
            <h3>${video.snippet.title}</h3>
            <img src="${video.snippet.thumbnails.high.url}">
            `
            }
    })
}
getVideos()
