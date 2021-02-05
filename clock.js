setInterval(() => {
    d = new Date();
    // getting time from d date 
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // finding rotation from time 
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    // setting rotation into css 
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);