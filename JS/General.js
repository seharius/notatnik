const loginForm = document.getElementById('login-form');
const noteForm = document.getElementById('note-form');
const notesList = document.getElementById('notes-list');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  displayNotes();
});

noteForm.addEventListener('submit', (e) => {

  const title = noteForm.querySelector('input[type="text"]').value;
  const content = noteForm.querySelector('textarea').value;
  displayNotes();
});

function displayNotes() {
  notesList.innerHTML = '';

  const notes = [
    { title: 'Notatka 1', content: 'Treść notatki 1' },
    { title: 'Notatka 2', content: 'Treść notatki 2' },
    { title: 'Notatka 3', content: 'Treść notatki 3' }
  ];

  notes.forEach((note) => {
    const listItem = document.createElement('li');
    const titleElement = document.createElement('h3');
    const contentElement = document.createElement('p');

    titleElement.textContent = note.title;
    contentElement.textContent = note.content;

    listItem.appendChild(titleElement);
    listItem.appendChild(contentElement);
    notesList.appendChild(listItem);
  });
}