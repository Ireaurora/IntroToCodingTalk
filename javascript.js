// This is a single line comment in JavaScript

/*
This is a multi-line
comment in JavaScript
*/ 

/*
In this JavaScript file  we'll introduce most of the basics of programming we introduced 
duringt the talk 
*/ 
//This is the function we call from the HTML when we click the button
function calculate(){ 
    //Integer
    var finalAmount = 0;
    //Boolean
    var expensiveCity = false;

    //Get fine value
    var currentAmount = document.getElementById("currentAmount").value;

    //Convert string to a number
    console.log(currentAmount);
    currentAmount = Number(currentAmount)
    console.log(currentAmount);

    //Get location
    var fineLocation = document.getElementById("fineLocation").value;

    //Is this variable needed?
    finalAmount = finalAmount +  currentAmount;

    console.log(finalAmount);
    
    //Array of expensive locations 
    locations = ['Leeds', 'Liverpool', 'London', 'Manchester'];

    //for loop
    for(var location = 0; location < locations.length; location++){
        //if 
        if(fineLocation == locations[location]){
            expensiveCity = true;
        }else{
        }
    }

    console.log(expensiveCity);

    if(expensiveCity == true){
        finalAmount = finalAmount + 100;
    }else{
        finalAmount = finalAmount + 50;
    }

    console.log(finalAmount);

    document.getElementById("finalFineAmount").innerHTML= finalAmount;    
}
 