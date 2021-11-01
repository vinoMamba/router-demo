import "./style.css";

const div1 = document.createElement("div");
div1.innerHTML = "1";
const div2 = document.createElement("div");
div2.innerHTML = "2";
const div3 = document.createElement("div");
div3.innerHTML = "3";
const div4 = document.createElement("div");
div4.innerHTML = "4";
const routeTable = {
  1: div1,
  2: div2,
  3: div3,
  4: div4,
};

function route() {
  const number = window.location.hash.substr(1) || 1;
  const app = document.querySelector("#app");
  const div = routeTable[number.toString()];
  app.innerHTML = "";
  app.appendChild(div);
}
route();

window.addEventListener("hashchange", () => {
  route();
});
