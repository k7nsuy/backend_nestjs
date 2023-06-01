let isStarted = false;

const verify = (e) => {
    const number = document.getElementById("number").innerText;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    if (number === token) {
      document.getElementById("finish").disabled = true;
      isStarted = false;
    }
  if (isStarted === false) {
    isStarted = true;
    document.getElementById("finish").disabled = false;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    const number = document.getElementById("number");
    number.innerText = token;
    number.style.color = `#${token}`;

    // const verify = document.getElementById("verify");

    // verify.innerText = "인증완료";
    const timer = document.getElementById("timer");

    let time = 5;
    let timeCheck
    timeCheck = setInterval(() => {
      let seconds = time % 60;
      let minutes = Math.floor(time / 60);
      if (time >= 0) {
        if (seconds < 10) seconds = "0" + seconds;
        else seconds = seconds;
        timer.innerText = `${minutes}:${seconds}`;
        time = time - 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        clearInterval(timeCheck);
      }
    }, 1000);
    
  } else {

  }
};
