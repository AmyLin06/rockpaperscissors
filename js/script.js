// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

    // *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var input = $("#input").val();
    var choices = ["rock" , "paper" , "scissors"];
    var index = Math.floor(Math.random() * 2);
    var computerResult = choices[index];

    if (computerResult == input){
        $("#result").html("It's a tie!");
        $("#userChoice").html(input);
        $("#computerChoice").html(computerResult);
    }
    else if (computerResult == "rock"){
        if (input == "paper"){
            $("#result").html("You win!");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        } else{
            $("#result").html("You lose!");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        }
    }
    else if (computerResult == "paper"){
        if(input == "scissor"){
            $("#result").html("You win!");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        }else{
            $("#result").html("You lose");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        }
    }
    else if(computerResult == "scissor"){
        if(input == "rock"){
            $("#result").html("You win!");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        }else{
            $("#result").html("You lose");
            $("#userChoice").html(input);
            $("#computerChoice").html(computerResult);
        }
    }

})
