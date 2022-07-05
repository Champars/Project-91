player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;


document.getElementById("Player1name").innerHTML = player1_name + ":";
document.getElementById("Player2name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Q Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "A Turn: " + player2_name;

function adduser() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var answer = parseInt(number1) * parseInt(number2);
    console.log(answer);

    var question = "<h4>" + number1 + " " + "X" + " " + number2 + "</h4>";
    var input = "<br>Answer : <input type='text' id='checkbox'>"
    var Checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    var Row = question + input + Checkbutton;

    document.getElementById("output").innerHTML = Row;
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";

}