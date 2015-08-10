

exports.route = function(app) {

	app.get('/',function(req,res){
		console.log("/request");
		//res.send("Asd");
		res.sendFile(app.get('views')+'/index.html');
		//console.log(req.cookies);
		//console.log(req.session);
	})
	app.get('/login',function (req,res) {
		req.session.email=app.get("sessionConf");

		res.send("/login");

		console.log("-------------"+req.session.email);
		console.log(req.cookies);
	});

	app.get('/logOut',function (req,res) {
		req.session.email="";
		res.redirect("/");
		//console.log(req.session.id);
	})
	app.get('/checkSession',function  (req,res) {
		// body...

		res.send("asd");

	})

};
