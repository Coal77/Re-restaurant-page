// import { container } from "webpack";
import { factoryElem } from "./factory.js";

export function homePage() {
    const innerContainer = factoryElem("div", "innerContent", "");

    const title = factoryElem("h1", "", "Jomiloju's Breakfast Bar");

    const testimony = factoryElem("div", "", "");
    const testimonial = factoryElem("p", "", "Jomiloju's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.");
    const testifier = factoryElem("p", "author", "Jamiu");


    const timeOpen = factoryElem("div", "", "");
    const hoursTitle = factoryElem("h4", "", "Hours");
    const timeLists = [ "Sunday: 8am - 8pm", "Monday: 8am - 8pm", "Tuesday: 8am - 8pm", "Wendnesday: 8am - 8pm", "Thursday: 8am - 8pm", "Friday: 8am - 12am", "Saturday: 8am - 7pm" ];

    const timesContainer = factoryElem("ul", "", "");
    for (const openHours of timeLists) {
        const time = factoryElem("li", "", openHours);
        timesContainer.appendChild(time)
    }

    const location = factoryElem("div", "", "");
    const locationTitle = factoryElem("h4", "", "Location");
    const address = factoryElem("p", "", "123 Forest Drive, Forestville, Maine.")




    testimony.append(testimonial, testifier);

    for (const box of [ title, testimony, timeOpen, location ]) {
        innerContainer.append(box);
    }
    timeOpen.append(hoursTitle, timesContainer)

    location.append(locationTitle, address)


    return innerContainer

}


