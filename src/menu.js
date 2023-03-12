import { createElements } from "./createElements";

const createMenuDiv = () => {
    const contentDiv = document.getElementById('content');
    let menuDiv = createElements('div', 'menu', '');
    let card1Div = createElements("div", "card stacked", '<img src="../src/assets/images/hummus.jpg" alt="A picture of a hummus dip"/> <div class="card-content"> <h2 class="card-title">Ellie\'s Spicy Hummus</h2> <p class="card-description"> a spicy hummus dip served with pita bread and fresh vegetables. </p> </div>');
    let card2Div = createElements("div", "card stacked", '<img src="../src/assets/images/jerky.jpg" alt="A picture of beef jerkies"/><div class="card-content"><h2 class="card-title">Joel\'s Venison Jerky</h2><p class="card-description">house-made venison jerky with <br />a spicy seasoning.</p></div>')
    let card3Div = createElements('div', "card stacked", ' <img src="../src/assets/images/burger.jpg" alt="A picture of a burger" /> <div class="card-content"> <h2 class="card-title">The Firefly Burger</h2> <p class="card-description"> a juicy beef patty topped with roasted red peppers, crispy onions, and a smoky BBQ sauce. </p> </div>')
    let card4Div = createElements('div', "card stacked", ' <img src="../src/assets/images/smoothie.jpg" alt="A picture of a green smoothie" /> <div class="card-content"> <h2 class="card-title">Ellie\'s Energy Elixir</h2> <p class="card-description"> a potent green smoothie made with kale, spinach, and apples. </p> </div> </div>')
    contentDiv.append(menuDiv)
    menuDiv.append(card1Div)
    menuDiv.append(card2Div)
    menuDiv.append(card3Div)
    menuDiv.append(card4Div)
}

export {createMenuDiv};