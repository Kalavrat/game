export function createKards() {
  let body = document.querySelector(".body");
  const con = document.querySelector(".con");
  const twelve = document.querySelector(".twelve");
  const sixteen = document.querySelector(".sixteen");
  const twenty = document.querySelector(".twenty");
  const back = document.querySelector(".back");

  let mas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  mas.sort(() => Math.random() - 0.5);

  for (let j = 0; j < mas.length; j++) {
    const kvad = document.createElement("div");
    kvad.className = "kvad";
    con.append(kvad);

    const h2 = document.createElement("h2");
    h2.className = "h2";
    h2.textContent = mas[j];
    kvad.append(h2);
    h2.hidden = true;
  }

  twelve.addEventListener("click", () => {
    con.innerHTML = "";
    mas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    mas.sort(() => Math.random() - 0.5);

    for (let j = 0; j < mas.length; j++) {
      const kvad = document.createElement("div");
      kvad.className = "kvad";
      con.append(kvad);
      const h2 = document.createElement("h2");
      h2.className = "h2";
      h2.textContent = mas[j];
      kvad.append(h2);
      h2.hidden = true;
      window.mas = mas;
    }
  });

  sixteen.addEventListener("click", () => {
    con.innerHTML = "";
    mas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    mas.sort(() => Math.random() - 0.5);

    for (let j = 0; j < mas.length; j++) {
      const kvad = document.createElement("div");
      kvad.className = "kvad";
      con.append(kvad);
      const h2 = document.createElement("h2");
      h2.className = "h2";
      h2.textContent = mas[j];
      kvad.append(h2);
      h2.hidden = true;
      window.mas = mas;
    }
  });

  twenty.addEventListener("click", () => {
    con.innerHTML = "";
    mas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    mas.sort(() => Math.random() - 0.5);

    for (let j = 0; j < mas.length; j++) {
      const kvad = document.createElement("div");
      kvad.className = "kvad";
      con.append(kvad);
      const h2 = document.createElement("h2");
      h2.className = "h2";
      h2.textContent = mas[j];
      kvad.append(h2);
      h2.hidden = true;
      window.mas = mas;
    }
  });
  window.mas = mas;
}
