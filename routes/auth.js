exports.route = function(app) {

  app.use(function (req,res,next) {
    console.log();
    if(req.session.email){
      return next();
    }
    res.redirect('/index.html');
  })

  app.get('/test',function (req,res) {
    res.send("success");
  })
  app.get('/logout',function (req,res) {
    req.session.email="";
    res.send(req.session.email);
  })

  app.get('/*',function (req,res) {
    // body...
    res.redirect('/index.html');
  })

};
