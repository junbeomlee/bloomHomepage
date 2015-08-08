exports.route = function(app) {

	app.get('/',function(req,res){
		res.send("test session");
		console.log(req.cookies);
		console.log(req.session);
	})
};