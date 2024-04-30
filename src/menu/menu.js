import burger1 from "./burger1.jpeg";
import burger2 from "./burger2.jpeg";
import burger3 from "./burger3.jpeg";
import burger4 from "./burger4.jpeg";
import burger5 from "./burger5.jpeg";
import burger6 from "./burger6.jpeg";

const menuComponent = () => {
  const component = document.createElement("div");
  component.id = "menu";

  const title = document.createElement("h2");
  title.id = "title-menu";
  title.textContent = "Menu";

  //Menu content
  const menuElement = document.createElement("div");
  menuElement.id = "menu-content";

  //menu items
  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  const menuItem1Text = document.createElement("div");
  menuItem1Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem1Image = new Image();
  menuItem1Image.src = burger1;
  menuItem1.appendChild(menuItem1Text);
  menuItem1.appendChild(menuItem1Image);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  const menuItem2Text = document.createElement("div");
  menuItem2Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem2Image = new Image();
  menuItem2Image.src = burger2;
  menuItem2.appendChild(menuItem2Text);
  menuItem2.appendChild(menuItem2Image);

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  const menuItem3Text = document.createElement("div");
  menuItem3Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem3Image = new Image();
  menuItem3Image.src = burger3;
  menuItem3.appendChild(menuItem3Text);
  menuItem3.appendChild(menuItem3Image);

  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");
  const menuItem4Text = document.createElement("div");
  menuItem4Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem4Image = new Image();
  menuItem4Image.src = burger4;
  menuItem4.appendChild(menuItem4Text);
  menuItem4.appendChild(menuItem4Image);

  const menuItem5 = document.createElement("div");
  menuItem5.classList.add("menu-item");
  const menuItem5Text = document.createElement("div");
  menuItem5Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem5Image = new Image();
  menuItem5Image.src = burger5;
  menuItem5.appendChild(menuItem5Text);
  menuItem5.appendChild(menuItem5Image);

  const menuItem6 = document.createElement("div");
  menuItem6.classList.add("menu-item");
  const menuItem6Text = document.createElement("div");
  menuItem2Text.innerHTML = "<h3>La Cochone<h3><p>$13.44</p>";
  const menuItem6Image = new Image();
  menuItem6Image.src = burger6;
  menuItem6.appendChild(menuItem6Text);
  menuItem6.appendChild(menuItem6Image);

  menuElement.appendChild(menuItem1);
  menuElement.appendChild(menuItem2);
  menuElement.appendChild(menuItem3);
  menuElement.appendChild(menuItem4);
  menuElement.appendChild(menuItem5);
  menuElement.appendChild(menuItem6);

  //wrap up
  component.appendChild(title);
  component.appendChild(menuElement);

  return component;
};

export { menuComponent };
