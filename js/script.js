// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$.("#shoot").click(function(){
    var input = $("#input").val();
    var choices = ["rock" , "paper" , "scissors"];
    var index = Math.floor(Math.random() * 2);
    var computerResults = choices[index];
})

