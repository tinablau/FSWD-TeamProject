function showTime() {
    var now = new Date();
    var now = now.toString();
    var now = now.substring (0,24);
    document.getElementById('time').innerHTML =
    now;
    var t = setTimeout(showTime, 1000);
}

var text = document.getElementById("anim_text")
text.addEventListener("animationiteration",textrotate);

function textrotate() {
    var i = Math.floor(Math.random()*anim_text.length);
    text.innerHTML = anim_text[i];
  /*  setTimeout(textrotate, 8000); 
	bad was to do,
	better to use EventListener on animationiteration to change the text
  */
}

textrotate();
showTime();
