import "./style.css";
import { homeComponent } from "./home";
import { menuComponent } from "./menu";
import { contactComponent } from "./contact";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const elements = {
  content: document.getElementById("content"),
  homeButton: document.getElementById("home-button"),
  menuButton: document.getElementById("menu-button"),
  contactButton: document.getElementById("contact-button"),
};

const loadHome = () => {
  elements.content.appendChild(homeComponent());
};

const loadMenu = () => {
  elements.content.appendChild(menuComponent());
};

const loadContact = () => {
  elements.content.appendChild(contactComponent());
};

loadHome();

elements.homeButton.addEventListener("click", () => {
  elements.content.innerHTML = "";
  loadHome();
});

elements.menuButton.addEventListener("click", () => {
  elements.content.innerHTML = "";
  loadMenu();
});

elements.contactButton.addEventListener("click", () => {
  elements.content.innerHTML = "";
  loadContact();
});
