import { createKards } from "./kards.js";
import { start } from "./timer.js";
import { clear } from "./timer.js";
export function play() {
  let body = document.querySelector(".body");
  let con = document.querySelector(".con");
  const twelve = document.querySelector(".twelve");
  const sixteen = document.querySelector(".sixteen");
  const twenty = document.querySelector(".twenty");
  const kards = createKards();
  const againbtn = document.createElement("button");
  againbtn.className = "again";
  againbtn.textContent = "Играть снова";
  body.append(againbtn);

  const kvads = document.getElementsByClassName("kvad");
  const h2s = document.getElementsByClassName("h2");
  let count = 0;
  let h2s1Text;
  let h2s2Text;
  let h2s1;
  let h2s2;
  let kvad1;
  let kvad2;
  let win = 0;
  let sec = 0;
  let hide;

  body.addEventListener("click", (press) => {
    if (press.target == twelve) {
      twelve.style.backgroundColor = "rgb(184, 112, 5)";
      sixteen.style.backgroundColor = "rgb(255, 153, 0)";
      twenty.style.backgroundColor = "rgb(255, 153, 0)";
    }
    if (press.target == sixteen) {
      sixteen.style.backgroundColor = "rgb(184, 112, 5)";
      twelve.style.backgroundColor = "rgb(255, 153, 0)";
      twenty.style.backgroundColor = "rgb(255, 153, 0)";
    }
    if (press.target == twenty) {
      twenty.style.backgroundColor = "rgb(184, 112, 5)";
      twelve.style.backgroundColor = "rgb(255, 153, 0)";
      sixteen.style.backgroundColor = "rgb(255, 153, 0)";
    }
  });

  againbtn.addEventListener("click", () => {
    con.style.pointerEvents = "auto";
    clear();
    sec = 0;
    con.innerHTML = "";
    againbtn.remove();
    con.removeEventListener("click", hod);
    play();
    location.reload();
  });

  let hod = function (event) {
    console.log("loh");
    if (count == 2) {
      if (h2s2Text == h2s1Text) {
      } else {
        clearTimeout(hide);
        kvad1.style.backgroundColor = "rgb(255, 153, 0)";
        kvad2.style.backgroundColor = "rgb(255, 153, 0)";
        h2s1.hidden = true;
        h2s2.hidden = true;
      }
      count = 0;
    }

    for (let i = 0; i < kvads.length; i++) {
      if (event.target == kvads[i]) {
        if (sec == 0) {
          start();
          twelve.style.pointerEvents = "none";
          sixteen.style.pointerEvents = "none";
          twenty.style.pointerEvents = "none";
          sec++;
        }
        h2s[i].hidden = false;
        count += 1;

        if (count == 1) {
          kvad1 = kvads[i];
          h2s1Text = h2s[i].textContent;
          h2s1 = h2s[i];
          kvad1.style.backgroundColor = "rgb(221, 133, 0)";
        }
        if (count == 2) {
          kvad2 = kvads[i];
          h2s2 = h2s[i];
          h2s2Text = h2s[i].textContent;
          kvad2.style.backgroundColor = "rgb(221, 133, 0)";
          if (h2s2Text == h2s1Text) {
            kvad1.style.backgroundColor = "gray";
            kvad2.style.backgroundColor = "gray";
            kvad1.style.cursor = "default";
            kvad2.style.cursor = "default";
            kvad1.style.boxShadow =
              "3px 3px 0 #000 inset, -3px -3px 0 #000 inset";
            kvad2.style.boxShadow =
              "3px 3px 0 #000 inset, -3px -3px 0 #000 inset";
            win += 1;
          }
        }
      }
    }
    if (win == mas.length / 2) {
      console.log(win);
      let time;
      time = setTimeout(() => {
        con.style.pointerEvents = "none";
        clear();
        win = 0;
        alert("Поздравляем, вы прошли игру!");
        location.reload();
      });
    }

    if (count == 2) {
      if (h2s2Text == h2s1Text) {
      } else {
        hide = setTimeout(() => {
          kvad1.style.backgroundColor = "rgb(255, 153, 0)";
          kvad2.style.backgroundColor = "rgb(255, 153, 0)";
          h2s1.hidden = true;
          h2s2.hidden = true;
        }, 1000);
      }
    }
  };
  con.addEventListener("click", hod);
}
