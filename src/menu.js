import { factoryElem } from "./factory.js";

const menu = [
    {
        category: "Porridge",
        items: [
            { name: "Honey Oat Porridge", description: "Slow-cooked oats with wild honey and toasted nuts.", price: "$6" },
            { name: "Berry Porridge", description: "Creamy oats with fresh forest berries.", price: "$7" },
        ],
    },
    {
        category: "Mains",
        items: [
            { name: "Bear Stack", description: "Three fluffy pancakes with maple syrup and butter.", price: "$9" },
            { name: "Woodsman Plate", description: "Eggs, sausage, toast and fried plantain.", price: "$11" },
        ],
    },
    {
        category: "Drinks",
        items: [
            { name: "Fresh Orange Juice", description: "Squeezed to order.", price: "$4" },
            { name: "Hot Chocolate", description: "Thick and rich, with a marshmallow on top.", price: "$4" },
        ],
    },
];

function createMenuItem({ name, description, price }) {
    const item = factoryElem("div", "menuItem", "");
    const info = factoryElem("div", "itemInfo", "");

    info.append(factoryElem("h5", "", name), factoryElem("p", "", description));
    item.append(info, factoryElem("span", "price", price));

    return item;
}

function createCategory({ category, items }) {
    const box = factoryElem("div", "", "");
    box.append(factoryElem("h4", "", category));

    for (const item of items) {
        box.append(createMenuItem(item));
    }

    return box;
}

export function menuPage() {
    const innerContainer = factoryElem("div", "innerContent", "");
    innerContainer.append(factoryElem("h1", "", "Menu"));

    for (const category of menu) {
        innerContainer.append(createCategory(category));
    }

    return innerContainer;
}