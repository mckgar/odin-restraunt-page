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

    footer.appendChild(
      document.createElement("p")
    )
    footer.lastChild.textContent = "Footer Stuff";

    return footer;
  }

  const __homeMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.textContent = "Odin Restraunt";
    main.appendChild(title);

    const est = document.createElement("p");
    est.textContent = "Providing the community with fresh meals since never!";
    main.appendChild(est);

    const hype = document.createElement("div");
    hype.classList.add("hype");
    const review = document.createElement("p");
    const reviewer = document.createElement("p");
    review.textContent = `Oh wow, this meal was amazing! I'm definitely going to 
    have to come back here again and try everything else you serve! This might be 
    the best restraunt I've ever been to!`;
    reviewer.textContent = "-Totally a real customer";

    hype.appendChild(review);
    hype.appendChild(reviewer);

    const hours = document.createElement("table");

    const monday = document.createElement("tr");
    const mondayLabel = document.createElement("th");
    mondayLabel.textContent = "Monday";
    const mondayHours = document.createElement("td");
    mondayHours.textContent = "6:00am - 9:00pm";
    monday.appendChild(mondayLabel);
    monday.appendChild(mondayHours);
    hours.appendChild(monday);

    const tuesday = document.createElement("tr");
    const tuesdayLabel = document.createElement("th");
    tuesdayLabel.textContent = "Tuesday";
    const tuesdayHours = document.createElement("td");
    tuesdayHours.textContent = "6:00am - 9:00pm";
    tuesday.appendChild(tuesdayLabel);
    tuesday.appendChild(tuesdayHours);
    hours.appendChild(tuesday);

    const wednesday = document.createElement("tr");
    const wednesdayLabel = document.createElement("th");
    wednesdayLabel.textContent = "Wednesday";
    const wednesdayHours = document.createElement("td");
    wednesdayHours.textContent = "6:00am - 9:00pm";
    wednesday.appendChild(wednesdayLabel);
    wednesday.appendChild(wednesdayHours);
    hours.appendChild(wednesday);

    const thursday = document.createElement("tr");
    const thursdayLabel = document.createElement("th");
    thursdayLabel.textContent = "Thursday";
    const thursdayHours = document.createElement("td");
    thursdayHours.textContent = "6:00am - 9:00pm";
    thursday.appendChild(thursdayLabel);
    thursday.appendChild(thursdayHours);
    hours.appendChild(thursday);

    const friday = document.createElement("tr");
    const fridayLabel = document.createElement("th");
    fridayLabel.textContent = "Friday";
    const fridayHours = document.createElement("td");
    fridayHours.textContent = "6:00am - 11:00pm";
    friday.appendChild(fridayLabel);
    friday.appendChild(fridayHours);
    hours.appendChild(friday);

    const saturday = document.createElement("tr");
    const saturdayLabel = document.createElement("th");
    saturdayLabel.textContent = "Saturday";
    const saturdayHours = document.createElement("td");
    saturdayHours.textContent = "9:00am - 11:00pm";
    saturday.appendChild(saturdayLabel);
    saturday.appendChild(saturdayHours);
    hours.appendChild(saturday);

    const sunday = document.createElement("tr");
    const sundayLabel = document.createElement("th");
    sundayLabel.textContent = "Sunday";
    const sundayHours = document.createElement("td");
    sundayHours.textContent = "9:00am - 8:00pm";
    sunday.appendChild(saturdayLabel);
    sunday.appendChild(saturdayHours);
    hours.appendChild(saturday);

    main.appendChild(hype);
    main.appendChild(hours);

    return main;
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
      "$2.50 ea.",
      "130 calories",
      "Made with freshly roasted hatch green chile"
    ));
    main.appendChild(__createMenuItem(
      "Banana",
      "$10.00",
      "105 calories",
      "It's a banana, Michael. How much could it cost?"
    ));

    return main;
  }

  const __createMenuItem = (dishName, dishPrice, dishCalories, dishDescription) => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food");
    foodItem.textContent = dishName;

    const price = document.createElement("p");
    price.textContent = dishPrice;
    const calories = document.createElement("p");
    calories.textContent = dishCalories;
    const description = document.createElement("p");
    description.textContent = dishDescription;

    foodItem.appendChild(price);
    foodItem.appendChild(calories);
    foodItem.appendChild(description);

    return foodItem;
  }

  const __contactMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.textContent = "Contact Us!";
    main.appendChild(title);

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

    main.appendChild(contact);

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