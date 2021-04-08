var url = "https://api.covid19india.org/data.json";
//Fetching url for api
fetch(url)
     .then(response =>{
                  return response.json();
               })
      
               .then(data =>{
                    console.log(data);


                         //taking variables to store data
                         var totalconfirmstate,totalrecoveredstate,totaldeathstate, delconfirmstate, delrecoveredstate, deldeathstate;
                         totalconfirmstate = data.statewise[0].confirmed;
                         totalrecoveredstate=data.statewise[0].recovered;
                         totaldeathstate = data.statewise[0].deaths;

                         delconfirmstate = data.statewise[0].deltaconfirmed;
                         delrecoveredstate = data.statewise[0].deltarecovered;
                         deldeathstate = data.statewise[0].deltadeaths;

                         //taking  ids to show data                    
                         totalcases = document.getElementById('total-case');
                         totalrecovered = document.getElementById('total-recover');
                         totaldeath = document.getElementById('total-death');

                         delcase = document.getElementById('delcase');
                         delrecover = document.getElementById('delrecover');
                         deldeath = document.getElementById('deldeath');

                         //appending data
                         totalcases.innerHTML =`${totalconfirmstate}` ;
                         totalrecovered.innerHTML =`${totalrecoveredstate}` ;
                         totaldeath.innerHTML =`${totaldeathstate} ` ;

                         delcase.innerHTML =`${delconfirmstate} <span class="glyphicon glyphicon-arrow-up"></span>` ;
                         delrecover.innerHTML =`${delrecoveredstate} <span class="glyphicon glyphicon-arrow-up"></span>` ;
                         deldeath.innerHTML =`${deldeathstate} <span class="glyphicon glyphicon-arrow-up"></span>` ;


                        //for chart
                         //taking variable of change
                         var change = []
                         var changetobeprint = [];
                         var date = []
                         var datetobeprint = []
                         //change = data.cases_time_series                        
                        //taking data in array
                         var states = []
                         var confirmed = []
                         var recovered = []
                         var deaths = []  
                         
                         $.each(data.statewise,function(id,obj){
                              states.push(obj.state)
                              confirmed.push(obj.confirmed);
                              recovered.push(obj.recovered);
                              deaths.push(obj.deaths);

                         });

                         //For daily changes
                         $.each(data.cases_time_series,function(id,obj){
                              change.push(obj.dailyconfirmed);
                              changetobeprint= change.slice(90);
                              date.push(obj.date);
                              datetobeprint=date.slice(90);
                         });
                         console.log(change)

                         //eleminate 1st array object
                         states.shift();
                         confirmed.shift();
                         recovered.shift();
                         deaths.shift();
                         
                         var mychart = document.getElementById("chart").getContext('2d')

                         var chart = new Chart(mychart,{
                              type:'bar',
                              data:{
                                   labels: states,
                                   datasets : [
                                        {
                                        label:  "confirmed Cases",
                                        data: confirmed,
                                        backgroundColor : "yellow",
                                        minBarLength : 5
                                        },
                                        {
                                             label:  "Recovered Cases",
                                             data: recovered,
                                             backgroundColor : "green",
                                             minBarLength : 5
                                        },
                                        {
                                             label:  "Death Cases",
                                             data: deaths,
                                             backgroundColor : "red",
                                             minBarLength : 1
                                        },     
                                   ]
                              },
                              options:{}


                             
                         })

                         

                         var mychart = document.getElementById("1chart").getContext('2d')

                         var chart = new Chart(mychart,{
                              type:'line',
                              data:{
                                   labels: datetobeprint,
                                   datasets : [
                                        {
                                        label:  "Daily Confirmed ",
                                        data: changetobeprint,
                                        backgroundColor : "yellow",
                                        borderColor: "green",
                                        minBarLength : 100
                                        
                                        },
                                        
                                        
                                   ]
                              },
                              options:{}


                             
                         })
                         



               });             





                         