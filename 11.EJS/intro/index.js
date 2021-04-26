const express = require('express')
//For Post
var bodyParser = require('body-parser')

const app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Telling express that we are using EJS
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.send('Hello World')
})


/*Route params
app.get('/profile/:name', function(req , res){
    res.send(`the requested id is: ${req.params.name}`);
})
*/

//For EJS
app.get('/profile/:name', function(req , res){
    data = {
        age: 27,
        job: 'Developer',
        hobbies: [
            'eating',
            'fighting',
            'sleeping'
        ]
    }
    res.render('profile', {person: req.params.name , data : data});
})


//Post Request
app.get('/contact',function (req, res) {
    res.render('contact', req.body);
  })
//Post Request
app.post('/contact',urlencodedParser, function (req, res) {
    res.render('contact');
    console.log( req.body.name);
  })


app.listen(3000);
console.log("Server started at port 3000");




