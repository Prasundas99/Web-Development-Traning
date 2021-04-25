//Normal function statement
function sayHI(){
    console.log('Hi');
}
sayHI();




//Functionl expression
var sayBye = function(){
    console.log("Byee");
}
sayBye();


function callFunction(fun){
    fun();
}


callFunction(sayBye);