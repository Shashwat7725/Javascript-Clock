const t = document.getElementById("time");
const ampm = document.getElementById("ampm");
const dateMonth = document.getElementById("date");
const seconds_sub = document.getElementById("second");

const weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const d= new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let month = months[d.getMonth()];
let day = weekDays[d.getDay()];

t.innerHTML = hours + ":" + minutes;

dateMonth.innerHTML = month + " ," + day + " " + d.getDate();
seconds_sub.innerHTML = d.getSeconds();

if(hours>=12)
    ampm.innerHTML = "PM";
else
    ampm.innerHTML = "AM";