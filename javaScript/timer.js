const clock = document.getElementById("clock");

setInterval(function () {
  let time = new Date();
  clock.innerText = time.toLocaleTimeString();
}, 1000);