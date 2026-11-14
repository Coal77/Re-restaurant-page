import { factoryElem } from "./factory.js";

const contactInfo = [
    { title: "Visit Us", lines: ["123 Forest Drive", "Forestville, Maine"] },
    { title: "Call Us", lines: ["(207) 555-0123"] },
    { title: "Email", lines: ["hello@jomilojus.com"] },
];

function createContactBox({ title, lines }) {
    const box = factoryElem("div", "contactBox", "");
    box.append(factoryElem("h4", "", title));

    for (const line of lines) {
        box.append(factoryElem("p", "", line));
    }

    return box;
}

export function contactPage() {
    const innerContainer = factoryElem("div", "innerContent", "");
    innerContainer.append(factoryElem("h1", "", "Contact"));

    for (const info of contactInfo) {
        innerContainer.append(createContactBox(info));
    }

    return innerContainer;
}