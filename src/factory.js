function factoryElem(elem, className, textContent) {
    const createElem = document.createElement(elem);
    createElem.setAttribute("class", className);
    createElem.textContent = textContent;

    return createElem
}

class Page {
    constructor(title, sections) {
        this.title = title;
        this.sections = sections;
    }

    render() {
        const content = document.getElementById('content');
        content.replaceChildren();

        const inner = document.createElement('div');
        inner.classList.add('innerContent');

        const heading = document.createElement('h1');
        heading.textContent = this.title;
        inner.appendChild(heading);

        for (const section of this.sections) {
            inner.appendChild(section);
        }

        content.appendChild(inner);
    }
}

//todo Try to use a class to create the structures of the page as a bonus challenge when you're done

export { factoryElem, Page }