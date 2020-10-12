const router = require('../routes/siteRoutes');
const siteModel = require('../Models/siteUsers');

const hello = (req, res) => {
    res.render('hello', {'title' : 'TITLE'});
};

const contactus = (req, res) => {
    res.render('contact', {'contact' : 'RITWIK'});
};

const no = (req, res) => {
    
    const noblog = new siteModel({
        name : 'mk',
        city : 'mangalore'

    });
    noblog.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
};

const listall = (req, res) => {
    siteModel.find().then((result) => {
        res.send(result);
        
    }).catch((err) => {
        res.send(err);
    });
};

const helpost = (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    const nb = new siteModel({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });
    nb.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
};
        

module.exports = {
    hello,
    contactus,
    helpost, 
    no,
    listall
};