document.write(typeof 50); // Using type of operator and displaying results

document.write(50 + "fifty-five"); // Using Type Coercion and Displaying results

function Challenge_NAN() {
    document.getElementById("know1").innerHTML = 0 / -0;
} // Displaying NAN (Not a Number)

function Get_True() {
    document.getElementById("know2").innerHTML = isNaN("Hello, World!");
} // Using isNaN() function to make browser display true

function Get_False() {
    document.getElementById("know3").innerHTML = isNaN("23");
} // Using isNaN() function to make browser display false

function Get_Infinity() {
    document.getElementById("know4").innerHTML = (5E500); // Displaying Infinity
}

function Get_Negative_Infinity() {
    document.getElementById("know5").innerHTML = (-5E500); // Displaying -Infinity
}

document.write(5>2); // Utilizing > operator to display true
document.write(5<2); // Utilizing < operator to display false
console.log(5+5); // Utilizing console.log method to display the results in the browser console
console.log(10<5); // Utilizing console.log method to display the false in the browser console
document.write((50+5) == 55); // Utinglizing the == operator to display true
document.write(70 == 71); // Utilizing the == operator to display false

// This whole section is Utilizing the === operator to display true and false
h = 5;
j = 7;
k = 5;
l = "hello";
v = "5";
document.write(h === k); 
document.write(h === l);
document.write(h === v);
document.write(l === v);
// End === section

// Using AND OR operators to diplay true and false
document.write(90 == 90 && 45 > 40);
document.write(90 < 40 && 45 > 40);
document.write(90 == 90 || 90 < 100);
document.write(90 == 50 || 90 == 100);

// Using NOT Operator to diplay true and false
document.write(! 5 == 5);
document.write(! 5 < 5);