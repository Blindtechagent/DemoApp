// =====================================
// Storage Configuration
// =====================================

const STORAGE_KEY = "quick_notepad_notes";


// =====================================
// Load All Notes
// =====================================

function loadNotes() {

    try {

        const data = localStorage.getItem(STORAGE_KEY);

        if (!data) {

            return [];

        }

        return JSON.parse(data);

    }

    catch (error) {

        console.error("Unable to load notes.", error);

        return [];

    }

}


// =====================================
// Save All Notes
// =====================================

function saveNotes(notes) {

    try {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(notes)

        );

    }

    catch (error) {

        console.error("Unable to save notes.", error);

    }

}


// =====================================
// Delete All Notes
// =====================================

function deleteAllNotes() {

    localStorage.removeItem(STORAGE_KEY);

}


// =====================================
// Get Note By ID
// =====================================

function getNoteById(id) {

    const notes = loadNotes();

    return notes.find(note => note.id === id) || null;

}


// =====================================
// Delete One Note
// =====================================

function deleteNote(id) {

    const notes = loadNotes();

    const filteredNotes = notes.filter(

        note => note.id !== id

    );

    saveNotes(filteredNotes);

}