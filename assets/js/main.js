const date = new Date();
const second = document.getElementById("sec");
const minute = document.getElementById("min");
const hour = document.getElementById("hr");
let sec = date.getSeconds();
let min = date.getMinutes();
let hr = date.getHours();

setInterval(() => {
    sec++;
    let secRotateDeg = sec * 6;
    let minRotateDeg = min * 6;
    let hrRotateDeg = hr * 30; 
    second.style.transform = `rotate(${secRotateDeg}deg)`;
    minute.style.transform = `rotate(${minRotateDeg}deg)`;
    hour.style.transform = `rotate(${hrRotateDeg}deg)`;
    if (sec % 60 == 0) {
        sec = 0;
        min++;
        if (min % 60 == 0) {
            min = 0;
            console.log(hr);
            if (hr % 24 == 0) {
                hr = 0;
                min=0;
            }
        }
    }
}, 1000);
