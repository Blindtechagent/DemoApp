// =====================================
// Screen Configuration
// =====================================

const SCREENS = {

    home: "homeScreen",

    editor: "editorScreen",

    settings: "settingsScreen",

    about: "aboutScreen"

};


// =====================================
// Navigation Buttons
// =====================================

const NAVIGATION = {

    home: "homeButton",

    editor: "newButton",

    settings: "settingsButton",

    about: "aboutButton"

};


// =====================================
// Current Screen
// =====================================

let currentScreen = "home";


// =====================================
// Show Screen
// =====================================

function showScreen(screenName) {

    // Hide all screens

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.add("hidden");

        });


    // Show selected screen

    document
        .getElementById(SCREENS[screenName])
        .classList.remove("hidden");


    currentScreen = screenName;


    updateNavigation();

}


// =====================================
// Update Bottom Navigation
// =====================================

function updateNavigation() {

    Object.keys(NAVIGATION).forEach(name => {

        const button = document.getElementById(NAVIGATION[name]);

        if (name === currentScreen) {

            button.setAttribute("aria-current", "page");

        }

        else {

            button.setAttribute("aria-current", "false");

        }

    });

}


// =====================================
// Open Editor
// =====================================

function openEditor(isEditing = false) {

    const heading = document.getElementById("editorHeading");

    const saveButton = document.getElementById("saveNoteButton");


    if (isEditing) {

        heading.textContent = "Edit Note";

        saveButton.textContent = "Update Note";

    }

    else {

        heading.textContent = "New Note";

        saveButton.textContent = "Save Note";

    }


    showScreen("editor");

}