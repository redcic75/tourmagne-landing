// Set the date we're counting down to
let dday = new Date("Apr 24, 2023 00:00:00").getTime();
// let dday = new Date("Jan 30, 2023 08:00:00").getTime();

function timeLeft() {
  const now = new Date().getTime();
  const timeleft = dday - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let dayString = "jour"
  if (days > 1) {
    dayString += "s";
  }

  // Display the result in the element with id="timeleft"
  document.getElementById("timeleft").innerHTML = `${days} ${dayString} ${hours} h ${minutes} min ${seconds} s`;

  // If the count down is finished, write some text
  if (timeleft < 0) {
    clearInterval(interval);
    document.getElementById("timeleft").innerHTML = "LE CHALLENGE A COMMENCÉ";
  }
}

timeLeft();

// Update the count down every 1 second
const interval = setInterval(timeLeft, 1000);
