const homeCreate = (() => {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.id = "header"
    const main = document.createElement("div");
    main.id = "main";
    const footer = document.createElement("div");
    footer.id = "footer";

    const navBar = document.createElement("div");
    navBar.classList.add("nav-bar");
    const name = document.createElement("h1");
    name.textContent = "Odin Restraunt";
    const links = document.createElement("div");
    links.classList.add("links");
    const home = document.createElement("a");
    home.textContent = "Home";
    home.href = "./index.html";
    const menu = document.createElement("a");
    menu.textContent = "Menu";
    menu.href = "";
    const contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.href = "";

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);
    navBar.appendChild(name);
    navBar.appendChild(links);
    header.appendChild(navBar);

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

    footer.appendChild(
      document.createElement("p")
    )
    footer.lastChild.textContent = "Footer Stuff";

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
})();