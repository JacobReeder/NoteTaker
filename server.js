const express = require('express');
const app = express();
const { data } = require('./db/db.json');
const path = require('path');

//middleware
app.use(express.static(__dirname + '/public'));

///////////////////////////////////////////////////////////////////////////////////

//The following API routes should be created:
//GET /api/notes should read the db.json file and return all saved notes as JSON.

//The application should have a db.json file on the back end, which will be used to store and 
//retrieve notes using the fs module. 


/////testing route in progress

app.get('/api/notes', (req, res) => {
    let results = data;
    console.log(req.query)
    res.json(results);
  });
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/notetaker', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });


///////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////


//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//and then return the new note to the client. You'll need to find a way to give each note a unique id 
//when it's saved (look into npm packages that could do this for you).


    app.post('/api/notetaker', (req, res) => {
        // req.body is where our incoming content will be
        console.log(req.body);
        res.json(req.body);
      });




////last
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });