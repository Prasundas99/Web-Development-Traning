/*
 npm == node package manager
 It is a 3rd party package system means
 open source of libery for node js which helps us to perform certain types of task
 We can find aanything in it

 site: https://www.npmjs.com


*/

//Creating Server Using express

const express = require('express')

/*New method based on ES6
include express from 'express';

ES6 is a set of rules for writing modern js (optional needs to learn valina js first)
*/
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);


//For contineous running of server : NODEMON