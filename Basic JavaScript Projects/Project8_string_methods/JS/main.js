function Con_Cat() { // Utilizing concat method to combine and display strings
    var n = "My name ";
    var m = "is Nathaniel";
    var p = " Noel :)";
    combined = n.concat(m, p);
    document.getElementById("now").innerHTML = combined;
}

var f = "Hi my name is Nathaniel."; // Utilizing slice method to slice sentences and diplaying results
var g = f.slice(5, 10);
document.write(g + "<br>");

// Utilizing toUpperCase method to capitalize all letters in the sentence and search method to find the index of the word in the sentence and both display the results
var t = "I am UPPERCASE!";  
var v = t.toUpperCase();
var c = t.search("am");
document.write(v + "<br>"); 
document.write(c + "<br>");

// Utilizing toString method to return a number as a string
var n = 55;
var m = n.toString();
document.write(m + "<br>");

// Utilizing toPrecision method to display a precise number that is the same value
var op = 200000;
var po = op.toPrecision(2);
document.write(po + "<br>"); 

// Utilizing toFixed method to round up a number at a fixed position and remove the rest
var ko = 7.7567;
var ok = ko.toFixed(1);
document.write(ok + "<br>");

// Utilizing valueOf method to display primitive value of the string
var to = "Hi, Man!";
var ot = to.valueOf();
document.write(ot);


