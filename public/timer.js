const audioFile = 'https://cdn.glitch.global/7ea2c2b4-d4b6-41d3-afca-c4c259b797be/Alarm01.wav?v=1685964726574';
timer
divTimer

var myTimer = null;
function stopTimer() {
  if (myTimer !== null) clearInterval(myTimer);
}
function startTimer() {
  let mins = parseInt(document.getElementById('timer').value);
  console.log(mins);
  if (mins < 0) return;

  stopTimer();
  setMessage("");

  let seconds = mins * 60;

  myTimer = setInterval(function () {
    var minutes = (seconds / 60) | 0;

    if (seconds < 0) {
      stopTimer();
      setMessage(mins + " minutes passed. Ended at " + getTime());
      new Audio(audioFile).play();
      return;
    }
    document.getElementById('divTimer'.innerHTML = minutes + ":" + (seconds - minutes * 60);
    seconds--;
  }, 1000);
}

function setMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}

function getTime() {
  var today = new Date();
  return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}
