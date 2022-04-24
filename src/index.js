import "./style.css";
import {pageCreate} from "./page-create.js";

pageCreate.initialCreate();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => pageCreate.homeCreate());
menu.addEventListener("click", () => pageCreate.menuCreate());
contact.addEventListener("click", () => pageCreate.contactCreate());