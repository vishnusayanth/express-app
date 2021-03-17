let express = require('express');
let router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Movies API by Vishnu Sayanth'});
});

module.exports = router;
