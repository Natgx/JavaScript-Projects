function Call_Loop() { // Loop from 3 to 19
    var num1 = "";
    var num2 = 3;
    while (num2 < 20) {
        num1 += "<br>" + num2;
        num2++;
    }
    document.getElementById("Loop").innerHTML = num1;
}

function array_Function() { // Diplay property and value of array
    var fruits = [];
    fruits[0] = "Apples";
    fruits[1] = "Bananas";
    fruits[2] = "Mangos";
    fruits[3] = "Grapes";
    document.getElementById("Array").innerHTML = "Ruby\'s favorite fruit are " + fruits[2] + ".";
}

function constant_function() { // Display property and value of array with a const 
    const Fruit = {type: "Grape", color: "red", size: "5cm", taste: "sweet"}
    document.getElementById("Constant").innerHTML = "My favorite fruit is " + Fruit.type + " because it taste " + Fruit.taste;
}

{ // Utilizing let and displaying its value inside and outside the block
    let now = "eat now!";
    document.getElementById("now").innerHTML = now;
}
document.getElementById("later").innerHTML = later;


function add_number(n, m) { // Return Statement Challenge (Return added numbers)
    return n + m;
}
document.getElementById("add").innerHTML = add_number(5, 5);

let fruit = { // Created an Object with the let variable and created a method within its properties to display sentence
    type: "Apple",
    taste: "Sweet",
    size: "5cm",
    sentence : function() {
        return "I bought an " + this.type + " that tasted " + this.taste + " and was " + this.size + " big.";
    }
};
document.getElementById("obj").innerHTML = fruit.sentence();

// Making a loop and utilizing the break statement
let sentence = "";
for (let n = 10; n > 0; n--) {
    if (n == 5) { break; }
    sentence += "Countdown: " + n + "<br>";
}
document.getElementById("Countdown1").innerHTML = sentence;

// Making a loop and utilizing the continue statement 
let sentence1 = "";
for (let m = 10; m > 0; m--) {
    if (m == 5) { continue; }
    sentence1 += "Countdown: " + m + "<br>";
}
document.getElementById("Countdown2").innerHTML = sentence1;    