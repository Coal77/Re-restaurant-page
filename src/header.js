import { factoryElem } from "./factory.js";

export function header(container) {
    const homeButton = factoryElem("button", "", "Home");
    const menuButton = factoryElem("button", "", "Menu");
    const contactButton = factoryElem("button", "", "Contact");

    container.append(homeButton, menuButton, contactButton);

    return { homeButton, menuButton, contactButton }
}