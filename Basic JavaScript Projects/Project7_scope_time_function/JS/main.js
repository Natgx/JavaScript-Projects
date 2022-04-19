var t = 5; // Creating a global variable

function Multiply_Numbers1() { // Defining a multiplication function that utilizes a local variable
    var n = 50;
    document.write(100 * n + "<br>");
}

function Divide_Numbers() { // Defining a division function that utilizes a global variable
    document.write(10 / t + "<br>");
}

function Multiply_Numbers2 () { // Defining a multiplication function that utilizes a local variable (intention to cause a error to display and debug the issue in the console in the browser)
    console.log(100 * n);
}

Multiply_Numbers1();
Divide_Numbers();
Multiply_Numbers2();

function Afternoon() { // Using if statements to display Good afternoon
    if (new Date().getHours() < 12) {
    document.getElementById("Good").innerHTML = "Good afternoon!";
    }
}

if (10 > 5) { // Not sure why this won't display on the screen but basically this is a conditional statement that displays the only option.
    document.write("Ten is greater than 5.");
}

function Drink() { // Using conditional statements (if,else) to display one of the statments in the branches
    Age = document.getElementById("Age").value
    if (Age >= 18) {
        drink = "Your are old enough to drink.";
    }
    else {
        drink = "You are not allowed to drink, you are to young."
    }
    document.getElementById("write_here").innerHTML = drink;
}

function Time_function() { // Using conditional statements (if,else if, else) to display one of the statments in the branches
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time of day").innerHTML = Reply;
}
