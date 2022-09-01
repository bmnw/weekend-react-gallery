const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

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

module.exports = router;