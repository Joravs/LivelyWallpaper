const middle = document.getElementById("middle");
const defaultAlbumArt = "./imgcenter/tn.svg"

function livelyCurrentTrack(data) {
    let obj = JSON.parse(data);
    //when no track is playing its null
    if (obj != null) {
        if (obj.Thumbnail != null) {
          middle.src = "data:image/png;base64, " + obj.Thumbnail;
        } else {
          middle.src = defaultAlbumArt;
          backgroundImage.src = null;
        }
      } else {
        document.querySelector("h1").innerText = "Waiting for media...";
        middle.src = defaultAlbumArt;
      }
}

document.addEventListener("DOMContentLoaded",function(){
    livelyCurrentTrack();
});