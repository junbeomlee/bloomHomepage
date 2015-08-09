exports.route = function(app) {

	app.get('/',function(req,res){
		console.log("/request");
		//res.send("Asd");
		res.sendFile(app.get('views')+'/index.html');
		//console.log(req.cookies);
		//console.log(req.session);
	})
	app.get('/asd',function  (req,res) {
		// body...
		res.send("asd");
		console.log("aaa");
	})

};
