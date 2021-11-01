import "./style.css";

const app = document.querySelector("#app");
const number = window.location.hash.substr(1) || 1;
let div = document.querySelector(`#div${number}`);
if (div) {
  div.style.display = "block";
  app.appendChild(div);
} else {
  div = document.querySelector("#div404");
  div.style.display = "block";
  app.appendChild(div);
}

window.addEventListener("hashchange", () => {
  const number = window.location.hash.substr(1);
  div = document.querySelector(`#div${number}`);
  if (div) {
    div.style.display = "block";
    app.appendChild(div);
  } else {
    div = document.querySelector("#div404");
    div.style.display = "block";
    app.appendChild(div);
  }
  app.children[0].style.display = "none";
  document.body.appendChild(app.children[0]);
  app.appendChild(div);
});
