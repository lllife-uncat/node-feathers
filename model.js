var mg = require("mongoose").connect("mongodb://localhost/test");
var db = mg.connection;

db.once("open", function callback(){ });

// car schema
var carSchema = mg.Schema( {
	name: String,
	color: String,
	speed: Number
});

// Home schema
var homeSchema = mg.Schema( {
	color: String,
	address: String,
});

// export my models here.
exports.Car = mg.model("car", carSchema);
exports.Home = mg.model("home", homeSchema);