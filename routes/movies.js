let express = require('express');
let router = express.Router();
let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('express_db.sqlite3');
let movies = [];
db.each("SELECT * FROM movies", function (err, row) {
    movies.push({
        id: row.id,
        name: row.movie_name,
    });
});

router.get('/', function (req, res) {
    res.send(movies);
});
//Routes will go here
module.exports = router;