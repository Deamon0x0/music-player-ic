let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrl = document.getElementById('progress')

song.onloadmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function pp(){
    if(ctrl.classList.contains("fa-pause")){
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }
    else {
        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() =>{
        progress.value = song.currentTime;
    }, 300)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
}