

const fs = require("fs");
const path = require("path");
  
  //////Function tnat accepts post data
  function createNewNote(body, notesArray) {
    const noteData = body;
    notesArray.push(noteData);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ newNote: notesArray }, null, 2)
    );
  
    return noteData;

  }

  module.exports = {
      createNewNote
  };
