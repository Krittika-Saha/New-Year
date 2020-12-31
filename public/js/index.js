
// let hours = ''
// let daysItem = document.querySelector("#days");
// let hoursItem = document.querySelector("#hours");
// let minItem = document.querySelector("#mins");
// let secItem = document.querySelector("#secs");


// let countDown = () => {
//   let futureDate = new Date("1 Jan 2021 00:00:00");
//   let currentDate = new Date();
//   let myDate = futureDate - currentDate;

//   let days = "0"+Math.floor(myDate / 1000 / 60 / 60 / 24);

//   hours = "0"+Math.floor(myDate / 1000 / 60 / 60) % 24;

//   let min = Math.floor(myDate / 1000 / 60) % 60;

//   let sec = Math.floor(myDate / 1000) % 60;

//   daysItem.innerHTML = days;
//   hoursItem.innerHTML = hours;
//   minItem.innerHTML = min;
//   secItem.innerHTML = sec;
// }

// countDown()
// if (min != 0 ||sec != 0){
//   setInterval(countDown, 1000)
// } else {
//   document.querySelector("#time").innerHTML = '<h1>Happy New Year!</h1>'
// }
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time3").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds + " ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time3").innerHTML = "Happy New Year";
  }
}, 1000);



