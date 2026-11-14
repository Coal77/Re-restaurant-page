import "./styles.css";
import { homePage } from "./homePage.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";
import { header } from "./header.js";

const nav = document.querySelector("nav");

function renderPage(page) {
const canvas = document.getElementById("content");
    canvas.replaceChildren();
    canvas.appendChild(page);
}

//! This renders the header buttons and destructures it
const { homeButton, menuButton, contactButton } = header(nav);
homeButton.addEventListener("click", () => renderPage(homePage()));
menuButton.addEventListener("click", () => renderPage(menuPage()));
contactButton.addEventListener("click", () => renderPage(contactPage));

renderPage(homePage());


