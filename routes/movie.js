let express = require('express');
let router = express.Router();

router.get('/:movie_id', (req, res, next) => {
    let sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('express_db.sqlite3');
    db.get(`SELECT MOVIES.id, MOVIES.movie_name, MOVIES.imdb_rating, GENRES.genre_name, DIRECTORS.director_name
            FROM ((MOVIES
                INNER JOIN GENRES ON MOVIES.genre_id = GENRES.id)
                     INNER JOIN DIRECTORS ON MOVIES.director_id = DIRECTORS.id)
            WHERE movies.id = ?`, [req.params.movie_id], (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.status(200).json(row);
    });
});
//Routes will go here
module.exports = router;