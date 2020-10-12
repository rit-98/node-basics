const express = require('express');
const app = express();
const router = require('./routes/siteRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const PORTNUMBER = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:false }));

const dbURI = 'mongodb+srv://yeedk:Mtbtdk999@cluster0.45otd.mongodb.net/njspracticedb?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true}).then((result) => app.listen(PORTNUMBER, console.log(`Server running on portnumber ${PORTNUMBER}`)))
.catch((err) => console.log(err));


// app.get('/', (req, res) => {
//     res.render('hello', {'title' : 'TITLE'});
// });


app.use(router);

// app.use('/site', router)
// app.listen();