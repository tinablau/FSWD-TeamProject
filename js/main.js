function showTime() {
    var now = new Date();
    var now = now.toString();
    var now = now.substring (0,24);
    document.getElementById('time').innerHTML =
    now;
    var t = setTimeout(showTime, 1000);
}


function rotate(img, deg, duration) {
    document.getElementById(img).style.transition = "all "+duration+"" ;
    document.getElementById(img).style.transform = "rotate("+deg+"deg)";
    setTimeout(restore,5000)
}

function restore (){
    document.getElementById("martina").style.transition = "all .5s";
    document.getElementById("martina1").style.transition = "all .5s";
}

showTime();
rotate("martina", 180, ".1s");
rotate("martina1", 180, ".1s");

var anim_text = ["Martina is the Queen of useless facts!!!","Yamam is the King of muscles","Zsolt is our Nevermind-guy","Mario is the Super Mario Master"];
var text = document.getElementById("anim_text")

function textrotate() {
    if (text.innerHTML == anim_text[0]) {
        text.innerHTML = anim_text[1]
    } else if (text.innerHTML == anim_text[1] ) {
        text.innerHTML = anim_text[2]
    } else if (text.innerHTML == anim_text[2]) { 
        text.innerHTML = anim_text[3]
    } else if (text.innerHTML == anim_text[3]) { 
        text.innerHTML = anim_text[0]
    }
    setTimeout(textrotate, 8000);
}

text.innerHTML = anim_text[3];
textrotate()

document.getElementById("martina").addEventListener("mouseover", function() {rotate("martina", 0, ".5s"); rotate("martina1", 0, ".5s")});
document.getElementById("martina").addEventListener("mouseout", function(){rotate("martina", 180, "5s"); rotate("martina1", 180, "5s")});

