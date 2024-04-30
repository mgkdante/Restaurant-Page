const contactComponent = () => {
  const component = document.createElement("div");
  component.id = "contact";

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact Us";

  const form = document.createElement("form");
  form.action = "/";

  // Create paragraph for required fields
  const p = document.createElement("p");
  p.textContent = "Required fields are followed by ";
  const span = document.createElement("span");
  span.setAttribute("aria-label", "Required");
  span.textContent = "*";
  p.appendChild(span);

  // Create fieldset for contact information
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Contact";
  fieldset.appendChild(legend);

  // Create list for form items
  const ul = document.createElement("ul");

  // Function to create list item with label and input
  function createFormItem(id, labelText, inputType) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerHTML = labelText;
    li.appendChild(label);
    const input = document.createElement(
      inputType === "textarea" ? "textarea" : "input",
    );
    if (inputType !== "textarea") {
      input.type = inputType;
    }
    input.id = id;
    input.name = `user_${id}`;
    li.appendChild(input);
    return li;
  }

  // Add form items to the list
  ul.appendChild(
    createFormItem(
      "name",
      'Name<span aria-label="Required">*</span>: ',
      "text",
    ),
  );
  ul.appendChild(
    createFormItem(
      "email",
      'Email<span aria-label="Required">*</span>: ',
      "email",
    ),
  );
  ul.appendChild(createFormItem("message", "Message: ", "textarea"));

  // Create submit button
  const liButton = document.createElement("li");
  liButton.className = "button";
  const button = document.createElement("button");
  button.type = "submit";
  button.id = "form-button";
  button.textContent = "Submit your message!";
  liButton.appendChild(button);
  ul.appendChild(liButton);

  // Append elements to the form
  fieldset.appendChild(ul);
  form.appendChild(p);
  form.appendChild(fieldset);

  component.appendChild(contactTitle);
  component.appendChild(form);
  return component;
};

export { contactComponent };
