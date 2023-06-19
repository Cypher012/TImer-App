const stopwatchBtn = document.getElementById("stopwatch-btn");
const timerBtn = document.getElementById("timer-btn");
const stopwatch = document.getElementById("stopwatch");
const timer = document.getElementById("timer");

//Stopwatch Variables
const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const buttonContainer = document.getElementById("button-container");

//Timer Variables
const add = document.querySelectorAll("#add");
const minus = document.querySelectorAll("#minus");
const daysTimer = document.getElementById("days-timer");
const hoursTimer = document.getElementById("hours-timer");
const minutesTimer = document.getElementById("minutes-timer");
const secondsTimer = document.getElementById("seconds-timer");
const block = document.querySelectorAll("#block");
const start = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const resetTimer = document.getElementById("reset-timer");
const arrow = document.querySelectorAll(".arrow");

buttonContainer.addEventListener("click", (e) => {
  const btn = e.target.id;
  if (btn === "stopwatch-btn") {
    stopwatch.classList.remove("hidden");
    stopwatch.classList.add("flex");
    timer.classList.add("hidden");
  }
  if (btn === "timer-btn") {
    timer.classList.remove("hidden");
    timer.classList.add("flex");
    stopwatch.classList.add("hidden");
  }
});

//Stopwatch
{
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  let leadingSeconds = 0;
  let leadingMinutes = 0;
  let leadingHours = 0;
  let leadingMilliseconds = 0;

  let fullMilliseconds;
  let fullSeconds;
  let fullMinutes;
  let fullHours;

  let clear;

  const stopwatchFunc = () => {
    seconds++;

    if (seconds / 60 === 1) {
      minutes++;
      seconds = 0;
    } else if (minutes / 60 === 1) {
      hours++;
      minutes = 0;
    }

    if (seconds < 10) {
      fullSeconds = leadingSeconds.toString() + seconds;
    } else {
      fullSeconds = seconds;
    }
    if (minutes < 10) {
      fullMinutes = leadingMinutes.toString() + minutes;
    } else {
      fullMinutes = minutes;
    }
    if (hours < 10) {
      fullHours = leadingHours.toString() + hours;
    } else {
      fullHours = hours;
    }

    // console.log(`${fullHours} : ${fullMinutes} : ${fullSeconds} : ${fullMilliseconds}`);
    hoursContainer.innerText = fullHours;
    minutesContainer.innerText = fullMinutes;
    secondsContainer.innerText = fullSeconds;
  };

  play.addEventListener("click", () => {
    clear = setInterval(stopwatchFunc, 1000);
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
  });

  pause.addEventListener("click", () => {
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
    clearInterval(clear);
  });

  reset.addEventListener("click", () => {
    clearInterval(clear);
    play.classList.remove("hidden");
    pause.classList.add("hidden");
    seconds = 0;
    minutes = 0;
    hours = 0;
    fullSeconds = "0" + seconds;
    fullMinutes = "0" + minutes;
    fullHours = "0" + hours;
    hoursContainer.innerText = `${fullHours}`;
    minutesContainer.innerText = `${fullMinutes}`;
    secondsContainer.innerText = `${fullSeconds}`;
  });
}

//Timer
{
  let daysCount = 0;
  let hoursCount = 0;
  let minutesCount = 0;
  let secondsCount = 0;
  let countId;
  let fullDays;
  let fullHours;
  let fullMinutes;
  let fullSeconds;

  block.forEach((box) => {
    box.addEventListener("click", (e) => {
      const btn = e.target.id;
      if (btn === "add1") {
        daysCount++;
        daysTimer.innerText = "0" + daysCount;
        if (daysCount > 9) {
          daysTimer.innerText = daysCount;
        }
      }
      if (btn === "minus1") {
        daysCount--;
        daysTimer.innerText = "0" + daysCount;
        if (daysCount > 9) {
          daysTimer.innerText = daysCount;
        } else if (daysCount < 0) {
          daysCount = 0;
          daysTimer.innerText = "0" + daysCount;
        }
      }
      if (btn === "add2") {
        hoursCount++;
        hoursTimer.innerText = "0" + hoursCount;
        if (hoursCount > 9) {
          hoursTimer.innerText = hoursCount;
        }
        if (hoursCount >= 23) {
          hoursCount = 0;
          hoursTimer.innerText = "0" + hoursCount;
        }
      }
      if (btn === "minus2") {
        hoursCount--;
        hoursTimer.innerText = "0" + hoursCount;
        if (hoursCount > 9) {
          hoursTimer.innerText = hoursCount;
        } else if (hoursCount < 0) {
          hoursCount = 23;
          hoursTimer.innerText = hoursCount;
        }
      }
      if (btn === "add3") {
        minutesCount++;
        minutesTimer.innerText = "0" + minutesCount;
        if (minutesCount > 9) {
          minutesTimer.innerText = minutesCount;
        }
        if (minutesCount >= 60) {
          minutesCount = 0;
          minutesTimer.innerText = "0" + minutesCount;
        }
      }
      if (btn === "minus3") {
        minutesCount--;
        minutesTimer.innerText = "0" + minutesCount;
        if (minutesCount > 9) {
          minutesTimer.innerText = minutesCount;
        } else if (minutesCount < 0) {
          minutesCount = 59;
          minutesTimer.innerText = minutesCount;
        }
      }
      if (btn === "add4") {
        secondsCount++;
        secondsTimer.innerText = "0" + secondsCount;
        if (secondsCount > 9) {
          secondsTimer.innerText = secondsCount;
        }
        if (secondsCount >= 60) {
          secondsCount = 0;
          secondsTimer.innerText = "0" + secondsCount;
        }
      }
      if (btn === "minus4") {
        secondsCount--;
        secondsTimer.innerText = "0" + secondsCount;
        if (secondsCount > 9) {
          secondsTimer.innerText = secondsCount;
        } else if (secondsCount < 0) {
          secondsCount = 59;
          secondsTimer.innerText = secondsCount;
        }
      }
    });
  });

  function afterClick() {
    if (
      daysTimer.innerText == "00" &&
      hoursTimer.innerText == "00" &&
      minutesTimer.innerText == "00" &&
      secondsTimer.innerText == "00"
    ) {
      clearInterval(countId);
      daysCount = 0;
      hoursCount = 0;
      minutesCount = 0;
      secondsCount = 0;
      start.classList.remove("hidden");
      stopTimer.classList.add("hidden");
      arrow.forEach((arrowBtn) => {
        arrowBtn.classList.remove("hidden");
      });
      block.forEach((blockList) => {
        blockList.classList.add("justify-evenly");
        blockList.classList.remove("justify-center");
      });
    } else {
      start.classList.toggle("hidden");
      stopTimer.classList.toggle("hidden");
      arrow.forEach((arrowBtn) => {
        arrowBtn.classList.add("hidden");
      });
      block.forEach((blockList) => {
        blockList.classList.remove("justify-evenly");
        blockList.classList.add("justify-center");
      });
    }
  }

  function countdownFunc() {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      afterClick();
    } else {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
          }
        }
      }
    }

    if (seconds < 10) {
      fullSeconds = "0" + seconds;
    } else {
      fullSeconds = seconds;
    }
    if (minutes < 10) {
      fullMinutes = "0" + minutes;
    } else {
      fullMinutes = minutes;
    }
    if (hours < 10) {
      fullHours = "0" + hours;
    } else {
      fullHours = hours;
    }
    if (days < 10) {
      fullDays = "0" + days;
    } else {
      fullDays = days;
    }
    daysTimer.innerText = fullDays;
    hoursTimer.innerText = fullHours;
    minutesTimer.innerText = fullMinutes;
    secondsTimer.innerText = fullSeconds;
  }

  let days;
  let hours;
  let minutes;
  let seconds;

  function countdown(day = 0, hrs = 0, mnths = 0, secs = 0) {
    days = day;
    hours = hrs;
    minutes = mnths;
    seconds = secs;

    setTimeout(() => {
      countId = setInterval(countdownFunc, 1000);
    }, 5);
  }

  arrow.forEach((arrowBtn) => {
    start.addEventListener("click", () => {
      arrowBtn.classList.add("hidden");
    });
    stopTimer.addEventListener("click", () => {
      arrowBtn.classList.add("hidden");
    });
    resetTimer.addEventListener("click", () => {
      arrowBtn.classList.remove("hidden");
    });
  });

  start.addEventListener("click", () => {
    countdown(
      parseInt(daysTimer.innerText),
      parseInt(hoursTimer.innerText),
      parseInt(minutesTimer.innerText),
      parseInt(secondsTimer.innerText)
    );
    afterClick();
  });

  stopTimer.addEventListener("click", () => {
    afterClick();
    clearInterval(countId);
  });

  resetTimer.addEventListener("click", () => {
    clearInterval(countId);
    start.classList.remove("hidden");
    stopTimer.classList.add("hidden");

    daysCount = 0;
    hoursCount = 0;
    minutesCount = 0;
    secondsCount = 0;

    days = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    fullSeconds = "0" + seconds;
    fullMinutes = "0" + minutes;
    fullHours = "0" + hours;
    fullDays = "0" + days;

    daysTimer.innerText = `${fullDays}`;
    hoursTimer.innerText = `${fullHours}`;
    minutesTimer.innerText = `${fullMinutes}`;
    secondsTimer.innerText = `${fullSeconds}`;

    afterClick();
  });
}
