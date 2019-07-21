 $(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);
    
    $("#totalPoints").text(random);
    
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    
    var totalPoints= 0;
    var wins = 0;
    var losses = 0;
    
    $("#Wins").text(wins);
    $("#Losses").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $("#totalPoints").text(random);
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#score").text(totalPoints);
    }
    
    function winner() {
        alert("You Won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    
    $("#button1").on("click", function() {
        totalPoints= userTotal + num1;
        console.log("New userTotal " + totalPoints);
        $("#score").text(totalPoints);
    
        if (totalPoints=== random) {
            win()
        }
    
        else if (totalPoints > random) {
            loser()
        } 


    })

    $("#button2").on("click", function() {
        totalPoints = totalPoints + num1;
        console.log("New userTotal " + totalPoints);
        $("#score").text(totalPoints);
    
        if (totalPoints === random) {
            win()
        }
    
        else if (totalPoints > random) {
            loser()
        } 


    })


    $("#button3").on("click", function() {
        totalPoints = totalPoints + num1;
        console.log("New userTotal " + totalPoints);
        $("#score").text(totalPoints);
    
        if (totalPoints === random) {
            win()
        }
    
        else if (totalPoints> random) {
            loser()
        } 


    })

 $("#button4").on("click", function() {
        totalPoints = totalPoints + num1;
        console.log("New userTotal " + totalPoints);
        $("#totalPoints").text(totalPoints);
    
        if (totalPoints === random) {
            win()
        }
    
        else if (totalPoints> random) {
            loser()
        } 


    })
    });

