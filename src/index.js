import "./styles.css";
import { homePage } from "./homePage.js";
const canvas = document.getElementById("content");

function renderPage(page) {
    canvas.replaceChildren()
    canvas.appendChild(page)
}

renderPage(homePage())
