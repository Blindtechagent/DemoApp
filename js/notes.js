// =====================================
// Current Editing Note
// =====================================

let editingNoteId = null;


// =====================================
// Create or Update Note
// =====================================

function createNote(title, content) {

    const notes = loadNotes();

    if (editingNoteId === null) {

        notes.push({

            id: Date.now(),

            title: title,

            content: content,

            created: new Date().toISOString(),

            modified: new Date().toISOString(),

            pinned: false,

            archived: false

        });

    }

    else {

        const note = notes.find(note => note.id === editingNoteId);

        if (note) {

            note.title = title;

            note.content = content;

            note.modified = new Date().toISOString();

        }

        editingNoteId = null;

    }

    saveNotes(notes);

}


// =====================================
// Display Notes
// =====================================

function displayNotes() {

    const notes = loadNotes();

    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    if (notes.length === 0) {

        notesList.innerHTML = `

            <p id="emptyMessage">

                No notes available.

                <br><br>

                Select <strong>New Note</strong> to create your first note.

            </p>

        `;

        return;

    }

    notes.forEach(note => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "noteButton";

        button.textContent = note.title || "Untitled Note";

        button.setAttribute(

            "aria-label",

            "Open note " + (note.title || "Untitled Note")

        );

        button.addEventListener("click", () => {

            editNote(note.id);

        });

        notesList.appendChild(button);

    });

}


// =====================================
// Edit Note
// =====================================

function editNote(id) {

    const notes = loadNotes();

    const note = notes.find(note => note.id === id);

    if (!note) {

        return;

    }

    editingNoteId = id;

    document.getElementById("noteTitle").value = note.title;

    document.getElementById("noteContent").value = note.content;

    openEditor(true);

}


// =====================================
// New Note
// =====================================

function newNote() {

    editingNoteId = null;

    document.getElementById("noteTitle").value = "";

    document.getElementById("noteContent").value = "";

    openEditor(false);

}