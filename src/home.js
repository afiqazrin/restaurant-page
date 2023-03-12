import { createElements } from "./createElements";

const createHomeDiv = () => {
    const contentDiv = document.getElementById('content');

    let homeDiv = createElements('div', 'home', "Experience the Wilderness on Your Plate: <br /> Rustic Dishes and Local Flavors at <br />Ellie's Bites!");
    
    contentDiv.append(homeDiv);    
}

export {createHomeDiv}