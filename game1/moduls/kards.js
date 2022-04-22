export function createKards() {
  let body = document.querySelector(".body");
  const con = document.querySelector(".con");
  // const lvlbtn = document.createElement("button");
  // lvlbtn.className = "lvlbtn";
  // lvlbtn.textContent = "уровень";
  // con.append(lvlbtn);
  let mas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let j;
  mas.sort(() => Math.random() - 0.5);

  for (j = 0; j < 12; j++) {
    const kvad = document.createElement("div");
    kvad.className = "kvad";
    con.append(kvad);

    const h2 = document.createElement("h2");
    h2.className = "h2";
    h2.textContent = mas[j];
    kvad.append(h2);
    h2.hidden = true;
  }
}
