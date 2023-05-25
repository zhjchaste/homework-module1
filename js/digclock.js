function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    var utchr = d.getUTCHours();
    var timediff = utchr - hr;
    var adjTimeDiff = Math.abs(timediff);
    var timeZone;
    
    if (timediff > 0) {
        timeZone = "GMT-" + adjTimeDiff;
    } else if (timediff < 0) {
        timeZone = "GMT+" + adjTimeDiff;
    } else {
        timeZone = "GMT";
    }
    
    if (timediff = -7 ) {
        timeZone = "PT"; // Pacific Time
    } else if (timediff = -6) {
        timeZone = "MT"; // Mountain Time
    } else if (timediff = -5) {
        timeZone = "CT"; // Central Time
    } else if (timediff = -4){
        timeZone = "ET"; // Eastern Time
    }
    

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("Clock").innerText = time;
}

setInterval(currentTime, 1000);