function showTime() {
    var now = new Date();
    var now = now.toString();
    var now = now.substring (0,24);
    document.getElementById('time').innerHTML =
    now;
    var t = setTimeout(showTime, 1000);
}

showTime();

var anim_text = [
'<h3>"Martina is the Queen of useless facts!!!"</h3>self assigned','<h3>"Yamam is the King of muscles"</h3>is he really?','<h3>"Zsolt is our Nevermind-guy"</h3>who said so???','<h3>"Mario is the Super Mario Master"</h3>that´s what he thinks he is ^^'];
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