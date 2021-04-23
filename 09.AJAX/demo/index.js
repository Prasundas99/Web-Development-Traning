console.log("Ajax tutorial");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
     xhr.open('GET', 'ajax.txt', true);

     //1. Request type: GET POST
     //2. File Destination
     //3.Async:?
   

    // What to do on progress (optional)
    xhr.onprogress = function(){  //For Skleton
        console.log('On progress');
    }

/*
     xhr.onreadystatechange = function () {  //Old Alternative of onReady
         console.log('ready state is ', xhr.readyState);
     }
*/     

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    console.log("We are done!");

    // send the request
    xhr.send();
}


 
    


