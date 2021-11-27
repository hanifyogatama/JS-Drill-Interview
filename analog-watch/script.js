function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";

    if(hour == 0 ){
        hour = 12;
    } else if (hour > 12) {
        hour -= 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = `${hour}:${minute}:${second} ${session}`;

    document.getElementById("clock-display").innerHTML = time;
    document.getElementById("clock-display").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();