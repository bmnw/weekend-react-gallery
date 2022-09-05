const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');
const multer = require("multer");
const upload = multer({ dest: '../public/uploads'});

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route using database
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log(galleryId);
    const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`
    pool.query(queryText, [galleryId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route using database
router.get('/', (req, res) => {
    console.log('in GET /gallery');
    const queryText = 'SELECT * FROM "gallery" ORDER BY "id";'
    pool.query(queryText)
        .then((result) => {
            console.log('SELECT SUCCESS');
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR in GET /gallery', error);
            res.sendStatus(500);
        });
    // res.send(galleryItems);
}); // END GET Route

// POST Route using database
router.post('/', upload.single('uploaded_file'), (req, res, next) => {
    console.log('in POST /gallery', req.file, req.body);
    // change variable name for req.body 
    const textToAdd = req.body;
    // add req.files
    const fileToAdd = req.file;
    console.log('textToAdd', textToAdd);
    console.log('fileToAdd', fileToAdd);
    const queryText =   `INSERT INTO "gallery" ("path", "description")
                        VALUES ($1, $2);`
    pool.query(queryText, [fileToAdd.path, textToAdd.description])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('ERROR in POST /gallery', error);
            res.sendStatus(500);
        });
});

// DELETE route using database
router.delete('/:id', (req, res) => {
    console.log('in DELETE /gallery');
    const imageToDelete = req.params.id;
    console.log(imageToDelete);
    const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`
    pool.query(queryText, [imageToDelete])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            alert('ERROR in DELETE /gallery', error);
        });
});

module.exports = router;