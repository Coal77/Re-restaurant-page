import "./styles.css";
import { homePage } from "./homePage.js";
import { menuPage } from "./menu.js";
const canvas = document.getElementById("content");

function renderPage(page) {
    canvas.replaceChildren()
    canvas.appendChild(page)
}

renderPage(menuPage())
