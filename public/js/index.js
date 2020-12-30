//Code from https://codes4education.com/how-to-create-a-countdown-timer-using-javascript/

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#mins");
let secItem = document.querySelector("#secs");


let countDown = () => {
  let futureDate = new Date("1 Jan 2021");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)
