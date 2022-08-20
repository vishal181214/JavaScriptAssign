setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min  = time.getMinutes();
    let sec  = time.getSeconds();
    let zone = "AM";

    if(hour > 12)
    {
        hour -= 12;
        zone  ="PM";
    }

    if(hour == 0)
    {
        hour = 12;
        zone = "AM";
    }

    const element = document.getElementById("stats");
    const element2 = document.getElementById("msg");
    const element3 = document.getElementById("picture");
    if(hour >= 12 && hour < 4)
    {
        element.innerText = "LET'S HAVE SOME LUNCH";
        element2.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        element2.style.textAlign = "center";
        element3.style.background = "transparent url('./afternoon.png') 0% 0% no-repeat padding-box";
    }
    else if(hour > 4 && hour < 8)
    {
        element.innerHTML = `STOP YAWNING, GET SOME TEA.. <br>IT'S JUST EVENING!`;
        element2.innerText = "GOOD EVENING !!";
        element2.style.textAlign = "center";
        element3.style.background = "transparent url('./tea.png') 0% 0% no-repeat padding-box";
    }
    else if(hour >= 8 && hour < 12)
    {
        element.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        element2.innerText = "GOOD NIGHT !!";
        element2.style.textAlign = "center";
        element3.style.background = "transparent url('./night.png') 0% 0% no-repeat padding-box";
    }
    else
    {
        element.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        element2.innerText = "GOOD MORNING!! WAKE UP!!";
        element2.style.textAlign = "center";
        element3.style.background = "transparent url('./mrng.png') 0% 0% no-repeat padding-box";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min  = min < 10 ? "0" + min : min ;
    sec  = sec < 10 ? "0" + sec : sec ;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("zonee").innerHTML = zone;
}

showTime();

    console.log(hour);
    // console.log(min);
    // console.log(sec);
    // if(hour >= 12)
    // {
    //    const element = document.getElementById("stats");
    //    element.innerText = "LET'S HAVE SOME LUNCH";
    //    console.log(element.innerText);
    // }
