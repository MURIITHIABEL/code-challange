//Code Challenge 1 Student Grade Generator
var mark  = window.prompt("enter grade");
       
        if (mark > 90 && mark <= 99 ) {
            console.log ("A"); 
        }
        else {
            if (mark >= 60 && mark <= 79) {
                console.log ("B");
            }
            else {
                if (mark > 49 && mark <= 59) {
                    console.log ("C");
                }
                else {
                    if (mark >= 40 && mark <=49) {
                        console.log ("D");
                    }
                    else {
                        if (mark < 40 && mark > 0) {
                            console.log ("E");
                        }
                    else {
                        console.log ("Not applicable");
                    }
                }
            }
    }
 }


 //Code Challenge 2 Speed Detector
var speed = window.prompt("enter speed");
const speedLimit = 70;
const demPoint = 5;
  
    if (speed < speedLimit + demPoint) {
      console.log("Ok");
      
    }
  
    const points = Math.floor((speed - speedLimit) / demPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  

  