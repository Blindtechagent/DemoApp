const screens = {
    home: document.getElementById("homeScreen"),
    settings: document.getElementById("settingsScreen"),
    about: document.getElementById("aboutScreen")
};

function showScreen(screenName){

    Object.values(screens).forEach(screen => {
        screen.classList.add("hidden");
    });

    screens[screenName].classList.remove("hidden");

}