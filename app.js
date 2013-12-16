
// import modules
var feathers = require("feathers");
var model = require("./model")

// create services
var carService = {
	get : function(name, params, callback){	
		model.Car.find(function(err, rs){
			callback(null, rs );
		});
	},

	create: function(data, parmas, callback) {
		var car = new model.Car(data).save(function (err, record){
			console.log(err);
			callback(err, record);
		});
	}
};

feathers()
	.configure(feathers.socketio())
	.use("/car", carService)
	.listen(8000);
