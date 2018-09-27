function rotate(img, deg, duration) {
    document.getElementById(img).style.transition = "all "+duration+"" ;
    document.getElementById(img).style.transform = "rotate("+deg+"deg)";
    setTimeout(restore,5000)
}

function restore (){
    document.getElementById("martina").style.transition = "all .5s";
    document.getElementById("martina1").style.transition = "all .5s";
}

rotate("martina", 180, ".1s");
rotate("martina1", 180, ".1s");

document.getElementById("martina").addEventListener("mouseover", function() {rotate("martina", 0, ".5s"); rotate("martina1", 0, ".5s")});
document.getElementById("martina").addEventListener("mouseout", function(){rotate("martina", 180, "5s"); rotate("martina1", 180, "5s")});

