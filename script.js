function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  }
  
  // Your code here
  let newNote = document.querySelector("button");
  let notesContainer = document.querySelector('.sticky-notes');
  
  const createNoteCard = () => {
    let noteText = document.querySelector('#new-note').value.trim();
    let div = document.createElement('div');
    div.className = "sticky-note"; // Corrected class name
    div.style.backgroundColor = getRandomColour();
  
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => {
      notesContainer.removeChild(div);
    });
  
    let p = document.createElement('p');
    p.innerText = noteText;
  
    div.appendChild(deleteButton); // Append delete button first
    div.appendChild(p); // Then append note text
  
    notesContainer.appendChild(div);
  
    // Clear the textarea after adding the note
    document.querySelector('#new-note').value = '';
  }
  
  newNote.addEventListener('click', createNoteCard);
  