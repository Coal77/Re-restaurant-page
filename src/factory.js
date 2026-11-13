export function factoryElem(elem, className, textContent) {
    const createElem = document.createElement(elem);
    createElem.setAttribute("class", className);
    createElem.textContent = textContent;

    return createElem
}