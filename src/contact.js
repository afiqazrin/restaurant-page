import { createElements } from "./createElements";

const createContactDiv = () => {
    const contentDiv = document.getElementById('content');
    const contactDiv = createElements('div', 'contact', '');
    const contactLeftDiv = createElements('div', 'contact-left', ' <h3>Send your request</h3> <form> <div class="input-row"> <div class="input-group"> <label for="name">Name</label> <input type="text" name="name" id="name"> </div> <div class="input-group"> <label for="phone">Phone</label> <input type="tel" name="phone" id="phone"> </div> </div> <div class="input-row"> <div class="input-group"> <label for="email">Email</label> <input type="email" name="email" id="email"> </div> <div class="input-group"> <label for="subject">Subject</label> <input type="text" name="subject" id="subject"> </div> </div> <label for="message">Message</label> <textarea name="message" id="message" rows="5" placeholder="Your message..."></textarea> <button type="submit">Send</button> </form>')
    const contactRightDiv = createElements('div', 'contact-right', '<h3>Reach us</h3> <table> <tr> <td>Name</td> <td>Ellie\'s Bites</td> </tr> <tr> <td>Phone Number</td> <td>(612) 333-7625</td> </tr> <tr> <td>Address</td> <td>1700 W Parmer Ln, 78727</td> </tr> </table>')
    contentDiv.append(contactDiv);
    contactDiv.append(contactLeftDiv);
    contactDiv.append(contactRightDiv);
};

export {createContactDiv}