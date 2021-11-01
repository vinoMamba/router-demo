import "./style.css";
const app = document.querySelector("#app");

const allA = document.querySelectorAll("a.link");

for (let a of allA) {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const href = a.getAttribute("href");
    window.history.pushState(null, `page ${href}`, href);
    onStateChange();
  });
}

const div1 = document.createElement("div");
div1.innerHTML = "1";
const div2 = document.createElement("div");
div2.innerHTML = "2";
const div3 = document.createElement("div");
div3.innerHTML = "3";
const div4 = document.createElement("div");
div4.innerHTML = "4";
const routeTable = {
  "/1": div1,
  "/2": div2,
  "/3": div3,
  "/4": div4,
};

function route(container) {
  const number = window.location.pathname;
  console.log(number);
  const div =
    routeTable[number.toString()] || document.querySelector("#div404");
  container.innerHTML = "";
  container.appendChild(div);
}
route(app);

function onStateChange() {
  route(app);
}

// window.addEventListener("hashchange", () => {
//   route();
// });
