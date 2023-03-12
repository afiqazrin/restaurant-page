const createElements = (elementName, elementClass, elementContent) => {
    let elementCreated = document.createElement(`${elementName}`)
    elementCreated.className = `${elementClass}`;
    elementCreated.innerHTML = `${elementContent}`
    return elementCreated;
};

export {createElements};