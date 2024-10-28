const middle = document.getElementById("middle");

function livelyCurrentTrack(data) {
    let obj = JSON.parse(data);
    //when no track is playing its null
    if (obj != null){
        console.log(obj.Title);
        if (obj.Thumbnail != null){
            const base64String = !obj.Thumbnail.startsWith("data:image/")
            ? "data:image/png;base64," + obj.Thumbnail
            : obj.Thumbnail;
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    livelyCurrentTrack();
});