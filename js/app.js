// =====================================
// App Starts
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    displayNotes();

});


// =====================================
// Navigation
// =====================================

function initializeNavigation() {

    document
        .getElementById("homeButton")
        .addEventListener("click", () => {

            displayNotes();

            showScreen("home");

        });


    document
        .getElementById("newButton")
        .addEventListener("click", () => {

            clearEditor();

            openEditor(false);

        });


    document
        .getElementById("settingsButton")
        .addEventListener("click", () => {

            showScreen("settings");

        });


    document
        .getElementById("aboutButton")
        .addEventListener("click", () => {

            showScreen("about");

        });


    document
        .getElementById("noteForm")
        .addEventListener("submit", saveCurrentNote);

}


// =====================================
// Save Note
// =====================================

function saveCurrentNote(event) {

    event.preventDefault();

    const title = document
        .getElementById("noteTitle")
        .value
        .trim();

    const content = document
        .getElementById("noteContent")
        .value
        .trim();


    if (title === "" && content === "") {

        alert("Please enter a title or note.");

        return;

    }


    createNote(title, content);


    clearEditor();


    displayNotes();


    showScreen("home");

}


// =====================================
// Clear Editor
// =====================================

function clearEditor() {

    document.getElementById("noteTitle").value = "";

    document.getElementById("noteContent").value = "";

}


// =====================================
// Open Existing Note
// =====================================

function openNote(id) {

    const notes = loadNotes();

    const note = notes.find(note => note.id === id);

    if (!note) {

        return;

    }


    document.getElementById("noteTitle").value = note.title;

    document.getElementById("noteContent").value = note.content;


    openEditor(true);

}