var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Todo = require('../model/todoSchema')


/*
// How to save something to DB
var ItemOne = Todo({item:'buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
})

*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

   app.get('/todo', function(req, res){
     //get data from mongodb and pass it to the view
     Todo.find({},function(err , data){
       if(err)
        throw err;
        res.render('todo', {todos:data})
     })
     // find({}) -> fetch all items in db     find({item : 'buy flowers})--> Find specific item in db
        
   });
   
    app.post('/todo',urlencodedParser, function(req, res){
      //get data from the view and add it to mongodb  
      var newTodo = Todo(req.body).save(function(err,data){
        res.json(data)
      })
    });
    
    app.delete('/todo/:item', function(req, res){   
      //delete requested items from mongodb
      Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
        if(err) throw err;
        res.json(data)
      });

  });
    
}
