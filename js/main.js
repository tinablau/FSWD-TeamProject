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
}

showTime();
rotate("martina", 180);
rotate("martina1", 180);

document.getElementById("martina").addEventListener("mouseover", function() {rotate("martina", 0, ".5s"); rotate("martina1", 0, ".5s")});
document.getElementById("martina").addEventListener("mouseout", function(){rotate("martina", 180, "5s"); rotate("martina1", 180, "5s")});