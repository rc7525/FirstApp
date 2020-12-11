var express     = require("express");
var router      = express.Router();

require('dotenv').config();

//Home Page
router.get("/", function(req, res){
    res.render("landing/index");
});  

module.exports = router;