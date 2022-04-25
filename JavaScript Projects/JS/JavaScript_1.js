function Fruit_Choice() {
    var output;
    var choice = document.getElementById("choice").value;
    var say_again = " sounds tasty.";
    switch(choice) {
        case "Grape":
            output = "Grape" + say_again;
        break;
        case "Apple":
            output = "Apple" + say_again;
        break;
        case "Pear":
            output = "Pear" + say_again;
        break;
        case "Mango":
            output = "Mango" + say_again;
        break;
        case "Orange":
            output = "Orange" + say_again;
        break;
        default:
        output = "Make sure your choice is typed exactly the way it is written above.";
    }
    document.getElementById("Your_Choice").innerHTML = output;
}

function change() {
    var n = document.getElementsByClassName("me");
    n[0].innerHTML = "I have transformed!";
}

var c = document.getElementById("its_me_canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,50,50,0,2*Math.PI);
ctx.stroke();

var n = document.getElementById("its_me_canvas");
var ntx = n.getContext("2d");

var grd = ntx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "yellow");

ntx.fillStyle = grd;
ntx.fillRect(20, 20, 150, 100);