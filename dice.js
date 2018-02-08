document.getElementById("rollButton").onclick = function () {

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;

    var status1 = "You rolled "+diceTotal+".";

    if(d1 == d2){
        status.innerHTML = status1 + " DOUBLES! You get a free turn!";
    }else {
      status.innerHTML = status1 + " Roll Again!";
    }
}
