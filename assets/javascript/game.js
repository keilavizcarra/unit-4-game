 $(document).ready(function() {
     console.log("ready!");

    var random = Math.floor(Math.random()*102+19);
    
    $("#totalNumber").text(random);
    
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    
    var totalNumber= 0;
    var wins = 0;
    var losses = 0;
    
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $("#randomNumber").text(random);
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#score").text(totalNumber);
    }
    
    function win() {
        alert("You Won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    
    function losses() {
        alert("You Lose!");
        losses++;
        $("#losses").text(losses);
        reset();
    }
    
    $("#button1").on("click", function() {
        totalNumber= totalNumber+ num1;
        console.log("totalScore" + totalNumber);
        $("#score").text(totalNumber);
    
        if (totalNumber=== random) {
            win()
        }
    
        else if (totalNumber>= random) {
            losses()
        } 


    });

    $("#button2").on("click", function() {
        totalNumber = totalNumber+ num1;
        console.log("totalScore " + totalNumber);
        $("#score").text(totalNumber);
    
        if (totalNumber === random) {
            win()
        }
    
        else if (totalNumber>= random) {
            losses()
        } 


    });


    $("#button3").on("click", function() {
        totalNumber = totalNumber + num1;
        console.log("totalScore " + totalNumber);
        $("#score").text(totalNumber);
    
        if (totalNumber=== random) {
            win()
        }
    
        else if (totalNumber>=random) {
            losses()
        } 


    });

 $("#button4").on("click", function() {
        totalNumber = totalNumber+ num1;
        console.log("totalScore " + totalNumber);
        $("#score").text(totalNumber);
    
        if (totalNumber === random) {
            win()
        }
    
        else if (totalNumber>=random) {
            losses()
        } 


    });
    });

