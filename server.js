const fs = require('fs');
const path = require('path');
const express = require('express');
const { newNote } = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + '/public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());



///////////////////////////////////////////////////////////////////////////////////

  //////Function tnat accepts post data
  function createNewNote(body, notesArray) {
    const noteData = body;
    notesArray.push(noteData);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ newNote: notesArray }, null, 2)
    );
  
    return noteData;
  }

/////testing route in progress

app.get('/api/notes', (req, res) => {
    let results = newNote;
    console.log(req.query)
    res.json(results);
  });

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    req.body.id = newNote.length.toString();

    //add data to json file and data array in this function
      const noteData = createNewNote(req.body, newNote);

    res.json(noteData);
  });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/notetaker', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

////last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });