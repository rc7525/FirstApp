var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser")
    
var indexRoutes = require("./routes/index")    
    
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname  + "/public"));
app.set("view engine", "ejs");   
    
//Using the routes defined in the routes directory
app.use(indexRoutes);

//gives the port that cloud9 assigns and also an IP that cloud9 expects.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server has started!!!");
});
	