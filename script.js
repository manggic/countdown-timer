console.log('in JS ');



setInterval( () => {
    let d1 = new Date()  // month/day/year

    //console.log('check',typeof  d1.getFullYear() );
    let finalDate = '1/1/'+ String(d1.getFullYear() + 1) 

    let d2 = new Date(finalDate)
    
    //console.log(d2.toLocaleTimeString());
    let diff = (d2 - d1)  //miliseconds
    
    //console.log('miliseconds', diff);
    let timeInSecond  = Math.floor(diff / 1000)     // milisec to second
    
    //step1 
       
       let someHours = Math.floor(timeInSecond / 3600)
       let someSeconds =   timeInSecond % 3600
    
    // step2
    
       let finalMinutes =  Math.floor(someSeconds / 60)
       let finalSecond = someSeconds % 60
    //step3
       let finalDays = Math.floor( someHours / 24 )
       let finalHours = someHours % 24
       
      console.log(finalDays, finalHours,  finalMinutes, finalSecond); 
                    
 document.getElementById('days').innerHTML = finalDays
document.getElementById('hours').innerHTML = finalHours
document.getElementById('mins').innerHTML = finalMinutes
document.getElementById('secs').innerHTML = finalSecond

//console.log(finalDay, hour , minute, second);

} , 500 )


