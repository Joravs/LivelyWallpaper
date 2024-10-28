const middle = document.getElementById("middle");

function livelyCurrentTrack(data) {
    let obj = JSON.parse(data);
    //when no track is playing its null
    if (obj != null) {
        document.querySelector("h2").innerText = obj.AlbumArtist;
        document.querySelector("h2").innerText = obj.Artist;
        document.querySelector("h1").innerText = obj.Title;
        $("#backgroundImageFade").css("opacity", 1.0);
        backgroundImageFade.src = backgroundImage.src;
        if (obj.Thumbnail != null) {
          document.getElementById("albumart").src = "data:image/png;base64, " + obj.Thumbnail;
          backgroundImage.src = "data:image/png;base64, " + obj.Thumbnail;
        } else {
          document.getElementById("albumart").src = defaultAlbumArt;
          backgroundImage.src = null;
        }
      } else {
        document.querySelector("h2").innerText = "";
        document.querySelector("h1").innerText = "Waiting for media...";
        document.getElementById("albumart").src = defaultAlbumArt;
        $("#backgroundImageFade").css("opacity", 1.0);
        backgroundImageFade.src = backgroundImage.src;
        backgroundImage.src = defaultBackground;
      }
}

document.addEventListener("DOMContentLoaded",function(){
    livelyCurrentTrack();
});