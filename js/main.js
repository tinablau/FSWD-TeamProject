function showTime() {
    var now = new Date();
    var now = now.toString();
    var now = now.substring (0,24);
    document.getElementById('time').innerHTML =
    now;
    var t = setTimeout(showTime, 1000);
}

showTime();
