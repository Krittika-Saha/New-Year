
let hours = ''
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#mins");
let secItem = document.querySelector("#secs");


let countDown = () => {
  let futureDate = new Date("1 Jan 2021 0:00:00");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = "0"+Math.floor(myDate / 1000 / 60 / 60 / 24);

  hours = "0"+Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown()
if (hours != 0 || min != 0 || sec != 0){
  setInterval(countDown, 1000)
} else {
  document.querySelector("#time").innerHTML = '<h1>Happy New Year!</h1>'
}




