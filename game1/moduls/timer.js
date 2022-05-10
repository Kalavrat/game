let timer;
export function start() {
  const body = document.querySelector(".body");
  const con = document.querySelector(".con");
  const twelve = document.querySelector(".twelve");
  const sixteen = document.querySelector(".sixteen");
  const twenty = document.querySelector(".twenty");
  const back = document.createElement("div");
  back.className = "back";
  body.append(back);
  const seconds = document.createElement("h2");
  const minutes = document.createElement("h2");
  const toch = document.createElement("h2");
  seconds.className = "seconds";
  minutes.className = "minutes";
  toch.className = "toch";
  back.append(minutes);
  back.append(toch);
  back.append(seconds);
  toch.textContent = ":";
  let time = 30;

  if (twelve.style.backgroundColor == "rgb(184, 112, 5)") {
    time = 30;
  }
  if (sixteen.style.backgroundColor == "rgb(184, 112, 5)") {
    time = 60;
  }
  if (twenty.style.backgroundColor == "rgb(184, 112, 5)") {
    time = 90;
  }

  seconds.textContent = time % 60;
  minutes.textContent = Math.floor(time / 60);

  if (minutes.textContent == 0) {
    minutes.remove();
    toch.remove();
  }
  if (seconds.textContent < 10) {
    seconds.textContent = `0${time % 60}`;
  }
  //   let timer;
  timer = setInterval(() => {
    console.log(time);
    time--;
    seconds.textContent = time % 60;
    minutes.textContent = Math.floor(time / 60);
    if (minutes.textContent == 0) {
      minutes.remove();
      toch.remove();
      //   seconds.textContent = time % 60;
    }
    if (seconds.textContent < 10) {
      seconds.textContent = `0${time % 60}`;
    }

    if (time == 0) {
      clearTimeout(timer);
      con.style.pointerEvents = "none";
      alert("Время вышло, вы проиграли!");
      console.log(con);
      location.reload();
    }
  }, 1000);
}

export function clear() {
  clearTimeout(timer);
}
