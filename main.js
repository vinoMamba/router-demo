import "./style.css";

const app = document.querySelector("#app");
const number = window.location.hash.substr(1);
const div = document.querySelector(`#div${number}`);
div.style.display = "block";
app.appendChild(div);
