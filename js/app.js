document.addEventListener("DOMContentLoaded", () => {

    const homeButton = document.getElementById("homeButton");
    const settingsButton = document.getElementById("settingsButton");
    const aboutButton = document.getElementById("aboutButton");

    homeButton.addEventListener("click", () => {
        showScreen("home");
    });

    settingsButton.addEventListener("click", () => {
        showScreen("settings");
    });

    aboutButton.addEventListener("click", () => {
        showScreen("about");
    });

    showScreen("home");

    console.log("DemoApp started.");

});