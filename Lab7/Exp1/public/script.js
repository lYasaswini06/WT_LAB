const API = "http://localhost:3000";

function addNote() {

    const note = {
        title: document.getElementById("title").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value
    };

    fetch(API + "/notes", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(() => loadNotes());
}

function loadNotes() {

    fetch(API + "/notes")
    .then(res => res.json())
    .then(data => {

        let html = "";

        data.forEach(note => {
            html += `
            <div>
            <h3>${note.title}</h3>
            <p>${note.subject}</p>
            <p>${note.description}</p>

            <button onclick="deleteNote('${note._id}')">Delete</button>
            </div>
            `;
        });

        document.getElementById("notes").innerHTML = html;
    });
}

function deleteNote(id) {

    fetch(API + "/notes/" + id, {
        method:"DELETE"
    })
    .then(() => loadNotes());
}

loadNotes();