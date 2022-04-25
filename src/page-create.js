const pageCreate = (() => {
  const __headerCreate = () => {
    const header = document.createElement("div");
    header.id = "header";

    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");
    const name = document.createElement("h1");
    name.textContent = "Odin Restraunt";
    const links = document.createElement("ul");
    links.classList.add("links");
    const home = document.createElement("li");
    home.textContent = "Home";
    home.id = "home";
    const menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.id = "menu";
    const contact = document.createElement("li");
    contact.textContent = "Contact";
    contact.id = "contact";

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    navBar.appendChild(name);
    navBar.appendChild(links);
    header.appendChild(navBar);

    return header;
  }

  const __footerCreate = () => {
    const footer = document.createElement("div");
    footer.id = "footer";

    const backgroundAttr = document.createElement("a");
    backgroundAttr.href = "https://www.freepik.com/photos/vegan-background";
    backgroundAttr.textContent = "Vegan background photo created by valeria_aksakova - www.freepik.com";

    footer.appendChild(backgroundAttr);

    return footer;
  }

  const __homeMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const opening = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = "Odin Restraunt";

    const est = document.createElement("p");
    est.textContent = "Providing the community with fresh meals since never!";
    main.appendChild(est);

    opening.appendChild(title);
    opening.appendChild(est);
    main.appendChild(opening);

    const hype = document.createElement("div");
    hype.classList.add("hype");

    const reviewTitle = document.createElement("h3");
    reviewTitle.textContent = "Check out these raving reviews!"
    hype.appendChild(reviewTitle);

    hype.appendChild(__wrtieReview(
      `Oh wow, this meal was amazing! I'm definitely going to have to come 
      back here again and try everything else you serve! This might be the  
      best restraunt I've ever been to!`,
      "-Totally a real customer"
    ));
    hype.appendChild(__wrtieReview(
      `I've been eating here for 300 years, and I expect to eat here for 
      300 more!`,
      "-An immortal patron"
    ));
    hype.appendChild(__wrtieReview(
      `They understood that I didn't want a birthday song sung to me, despite 
      my families insistence! I will forever be in their debt.`,
      "-An average birthday haver"
    ));

    const hours = document.createElement("table");

    hours.appendChild(__addHours(
      "Monday",
      "6:00am - 9:00pm"
    ));
    hours.appendChild(__addHours(
      "Tuesday",
      "6:00am - 9:00pm"
    ));
    hours.appendChild(__addHours(
      "Wednesday",
      "6:00am - 9:00pm"
    ));
    hours.appendChild(__addHours(
      "Thursday",
      "6:00am - 9:00pm"
    ));
    hours.appendChild(__addHours(
      "Friday",
      "6:00am - 11:00pm"
    ));
    hours.appendChild(__addHours(
      "Saturday",
      "9:00am - 11:00pm"
    ));
    hours.appendChild(__addHours(
      "Sunday",
      "9:00am - 8:00pm"
    ));

    main.appendChild(hype);
    main.appendChild(hours);

    return main;
  }

  const __wrtieReview = (writtenReview, reviewer) => {
    const testimony = document.createElement("div");
    testimony.classList.add("review");
    const review = document.createElement("p");
    const reviewie = document.createElement("p");
    review.textContent = writtenReview;
    reviewie.textContent = reviewer;
    testimony.appendChild(review);
    testimony.appendChild(reviewie);

    return testimony;
  }

  const __addHours = (day, time) => {
    const weekday = document.createElement("tr");
    const weekdayLabel = document.createElement("th");
    weekdayLabel.textContent = day;
    const weekdayHours = document.createElement("td");
    weekdayHours.textContent = time;
    weekday.appendChild(weekdayLabel);
    weekday.appendChild(weekdayHours);

    return weekday;
  }

  const __menuMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.textContent = "See what we make!";
    main.appendChild(title);

    main.appendChild(__createMenuItem(
      "Baked Feta Pasta",
      "$6.99",
      "180 calories",
      "Pasta tossed in a creamy sauce of melted feta, basil, and roasted tomatoes"
    ));
    main.appendChild(__createMenuItem(
      "Green Chile Cheese Tamale",
      "$2.50",
      "130 calories",
      "Made with freshly roasted hatch green chile"
    ));
    main.appendChild(__createMenuItem(
      "Key Lime Pie",
      "$3.14",
      "300 calories",
      "Good enough to drive someone crazy!"
    ));
    main.appendChild(__createMenuItem(
      "A Literal Brick",
      "$5.00",
      "3200 calories",
      "10/10 dentists recommend"
    ));
    main.appendChild(__createMenuItem(
      "Banana",
      "$10.00",
      "105 calories",
      "It's a banana, Michael. How much could it cost?"
    ));
    main.appendChild(__createMenuItem(
      "Moa Burger",
      "$8.00",
      "105 calories",
      "Fresh from Reach!"
    ));
    main.appendChild(__createMenuItem(
      "Senzu Bean",
      "$44,195.00",
      "9001 calories",
      "Perfect for freshly defeated enemies!"
    ));
    main.appendChild(__createMenuItem(
      "Mtn Dew",
      "$2.00",
      "290 calories",
      "Pulsating through the veins of gamers for decades"
    ));

    return main;
  }

  const __createMenuItem = (dishName, dishPrice, dishCalories, dishDescription) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food");

    const name = document.createElement("p");
    name.textContent = dishName;
    name.classList.add("dish-name");
    const price = document.createElement("p");
    price.textContent = dishPrice;
    price.classList.add("price");
    const calories = document.createElement("p");
    calories.textContent = dishCalories;
    calories.classList.add("calories")
    const description = document.createElement("p");
    description.textContent = dishDescription;
    description.classList.add("dish-description");

    foodItem.appendChild(name);
    foodItem.appendChild(price);
    foodItem.appendChild(calories);
    foodItem.appendChild(description);

    return foodItem;
  }

  const __contactMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const contactWrapper = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = "Contact Us!";
    contactWrapper.appendChild(title);

    const contact = document.createElement("ul");
    contact.classList.add("comm");

    const phone = document.createElement("li");
    phone.textContent = "271-828-182-84";
    contact.appendChild(phone);

    const phoneIcon = document.createElement("span");
    phoneIcon.classList.add("material-icons-outlined");
    phoneIcon.textContent = "call";
    phone.insertBefore(phoneIcon, phone.childNodes[0]);

    const email = document.createElement("li");
    email.textContent = "contact@restraunt";
    contact.appendChild(email);

    const emailIcon = document.createElement("span");
    emailIcon.classList.add("material-icons-outlined");
    emailIcon.textContent = "email";
    email.insertBefore(emailIcon, email.childNodes[0]);

    const address = document.createElement("li");
    address.textContent = "81053 Galois Dr.";
    contact.appendChild(address);

    const addressIcon = document.createElement("span");
    addressIcon.classList.add("material-icons-outlined");
    addressIcon.textContent = "place";
    address.insertBefore(addressIcon, address.childNodes[0]);

    contactWrapper.appendChild(contact);
    main.appendChild(contactWrapper);

    return main;
  }

  const initialCreate = () => {
    const content = document.querySelector("#content");

    const header = __headerCreate();
    const main = __homeMain();
    const footer = __footerCreate();

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
  }

  const __mainDelete = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");

    content.removeChild(main);
  }

  const homeCreate = () => {
    const content = document.querySelector("#content");
    __mainDelete();
    const main = __homeMain();
    const footer = document.querySelector("#footer");

    content.insertBefore(main, footer);
  }

  const menuCreate = () => {
    const content = document.querySelector("#content");
    __mainDelete();
    const main = __menuMain();
    const footer = document.querySelector("#footer");

    content.insertBefore(main, footer);
  }

  const contactCreate = () => {
    const content = document.querySelector("#content");
    __mainDelete();
    const main = __contactMain();
    const footer = document.querySelector("#footer");

    content.insertBefore(main, footer);
  }

  return {initialCreate, homeCreate, menuCreate, contactCreate};
})();

export {pageCreate};