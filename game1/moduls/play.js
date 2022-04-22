import { createKards } from "./kards.js";
export function play() {
  let body = document.querySelector(".body");
  let con = document.querySelector(".con");
  // const lvlbtn = document.querySelector(".lvlbtn");
  const kards = createKards();
  const againbtn = document.createElement("button");
  againbtn.className = "again";
  againbtn.textContent = "Играть снова";
  body.append(againbtn);
  // console.log(lvlbtn);
  // console.log(againbtn);

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

  againbtn.addEventListener("click", () => {
    con.innerHTML = "";
    againbtn.remove();
    // lvlbtn.remove();
    con.removeEventListener("click", hod);
    play();
  });

  let hod = function (event) {
    if (count == 2) {
      if (h2s2Text == h2s1Text) {
      } else {
        h2s1.hidden = true;
        h2s2.hidden = true;
      }
      count = 0;
    }
    for (let i = 0; i < kvads.length; i++) {
      if (event.target == kvads[i]) {
        h2s[i].hidden = false;
        count += 1;

        if (count == 1) {
          kvad1 = kvads[i];
          h2s1Text = h2s[i].textContent;
          h2s1 = h2s[i];
        }
        if (count == 2) {
          kvad2 = kvads[i];
          h2s2 = h2s[i];
          h2s2Text = h2s[i].textContent;

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
    if (win == 6) {
      let time;
      // clearTimeout(time);
      time = setTimeout(() => {
        win = 0;
        alert("Поздравляем, вы прошли игру!");
      });
    }
  };
  con.addEventListener("click", hod);
}
