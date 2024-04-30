import restaurantImage from "./restaurant.jpg";

const homeComponent = () => {
  const component = document.createElement("div");
  component.id = "home";

  //Welcome section
  const welcomeElement = document.createElement("div");
  welcomeElement.id = "welcome";
  const welcomeText = document.createElement("p");
  welcomeText.id = "welcome-text";
  welcomeText.innerHTML =
    "Welcome to Yesid’s Restaurant, a culinary gem nestled in the heart of Montreal’s vibrant dining scene.<br> " +
    "As you step through our doors, you’re greeted by the warm embrace of our cozy ambiance, reminiscent of the city’s rich cultural tapestry.<br> " +
    "Here, we celebrate the fusion of traditional flavors and modern gastronomy, crafting dishes that tell a story with every bite.<br> " +
    "Our locally-sourced ingredients pay homage to Quebec’s bountiful produce, ensuring a fresh and delightful experience.<br> " +
    "Whether you’re here for a casual brunch or an elegant dinner, Yesid’s promises an unforgettable journey for your taste buds, all while you soak in the charming views of Mount Royal. Bon appétit! 🍽️🥂";
  const welcomeImage = new Image();
  welcomeImage.src = restaurantImage;
  welcomeImage.id = "welcome-image";

  welcomeElement.appendChild(welcomeText);
  welcomeElement.appendChild(welcomeImage);

  //Hours section
  const hoursElement = document.createElement("div");
  hoursElement.id = "hours";
  const hoursContent = document.createElement("div");
  hoursContent.id = "hours-content";
  const hoursWeekday = document.createElement("div");
  const hoursWeekend = document.createElement("div");
  hoursWeekday.innerHTML = "<h2>Weekday hours</h2>" + "<p>8AM - 8PM</p>";
  hoursWeekend.innerHTML = "<h2>Weekend hours</h2>" + "<p>8PM - 5PM</p>";
  hoursContent.appendChild(hoursWeekend);
  hoursContent.appendChild(hoursWeekday);
  hoursElement.appendChild(hoursContent);

  //Location section
  const locationElement = document.createElement("div");
  locationElement.id = "location";
  const locationContent = document.createElement("div");
  locationContent.id = "location-content";
  const location = document.createElement("div");
  location.innerHTML =
    "686 Rue Notre Dame O, <br> Montreal, <br>Quebec  H3C 1J2";
  const locationMap = document.createElement("div");
  locationMap.innerHTML =
    '<iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ' +
    'src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=686%20Rue%20Notre%20Dame%20O,%20Montreal,%20H3C%201J2+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">' +
    '<a href="https://www.gps.ie/">gps trackers</a></iframe>';
  locationContent.appendChild(location);
  locationContent.appendChild(locationMap);
  locationElement.appendChild(locationContent);

  //Wrap up
  component.appendChild(welcomeElement);
  component.appendChild(hoursElement);
  component.appendChild(locationElement);
  return component;
};

export { homeComponent };
