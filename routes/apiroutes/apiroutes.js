
const router = require('express').Router();
const { createNewNote } = require('../../lib/data.js');
const { newNote } = require('../../db/db.json');



router.get('/notes', (req, res) => {
    let results = newNote;
    console.log(req.query)
    res.json(results);
  });

router.post('/notes', (req, res) => {
    // req.body is where our incoming content will be
    req.body.id = newNote.length.toString();

    //add data to json file and data array in this function
      const noteData = createNewNote(req.body, newNote);

    res.json(noteData);
  });

  module.exports  = router;
