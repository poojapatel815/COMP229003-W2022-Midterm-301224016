exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

exports.about = function(req,res,next){
    res.render('index', { title: 'About'});
};