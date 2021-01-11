'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const timestampElement = document.querySelector('#timestamp')

let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

// Redirect if no ID is found
if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
timestampElement.textContent = generateLastEdited(note.updatedAt)

// Event listeners
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    timestampElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    timestampElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNotes(note.id)
    savedNotes(notes)
    location.assign('/notes-app/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        // Redirect if no ID is found
        if (!note) {
            location.assign('/index.html')
        }
    }
})
