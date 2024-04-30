const contactComponent = () => {
  const component = document.createElement("div");
  component.id = "contact";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";

  const contactForm = document.createElement("div");
  contactForm.innerHTML =
    '<form action="/">\n' +
    '    <p>Required fields are followed by <span aria-label="Required">*</span></p>\n' +
    "    <fieldset>\n" +
    "      <legend>Contact</legend>\n" +
    "      <ul>\n" +
    "        <li> \n" +
    '          <label for="name">Name<span aria-label="Required">*</span>: </label>\n' +
    '          <input type="text" id="name" name="user_name">\n' +
    "        </li>\n" +
    "\n" +
    "        <li> \n" +
    '          <label for="email">Email<span aria-label="Required">*</span>: </label>\n' +
    '          <input type="email" id="email" name="user_email">\n' +
    "        </li>\n" +
    "\n" +
    "\n" +
    "        <li> \n" +
    '          <label for="message">Message: </label>\n' +
    '          <textarea name="message" id="message" cols="30" rows="10" name="user_message"></textarea>\n' +
    "        </li>\n" +
    "\n" +
    '        <li class="button">\n' +
    '          <button type="submit" id="form-button">Submit your message!</button>\n' +
    "        </li>\n" +
    "\n" +
    "      </ul>\n" +
    "\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </form>";

  component.appendChild(contactTitle);
  component.appendChild(contactForm);
  return component;
};

export { contactComponent };
