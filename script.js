console.log("Witam serdecznie wszystkich Developerow 😍")

let button = document.querySelector(".button");
let content = document.querySelector(".content");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    content.classList.toggle("dark");

    /*zmiana motywu za pomoca funkcji if*/
    /*     if (content.classList.contains("dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    */

    /*zmiana motywu za pomoca funkcji ternary*/
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});