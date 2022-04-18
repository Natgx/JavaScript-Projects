function Ride_Function() { // Utilizing the ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { // Utilizing the ternary operator and displaying the results, condition: if you can vote or not
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age >= 18) ? "You can vote!":"You can't vote, you are to young"
    document.getElementById("Vote").innerHTML = can_vote + " right now";
}

// Creating Object Constructors and displaying results
function Vehicle(Make, Model, Year, Color) { 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + " colored" + Erik.Vehicle_Model + " manufactured in" + Erik.Vehicle_Year;
}

function Phone(Brand, Memory, Color) {
    this.Phone_Brand = Brand;
    this.Phone_Memory = Memory;
    this.Phone_Color = Color;
}
var Nat = new Phone("Apple", "16GB", "Black");
var Tan = new Phone("Android", "32GB", "Red");
var Mat = new Phone("Blackberry", "8GB", "White");
function New_Function() {
    document.getElementById("New_and_This").innerHTML = "Nat has a " + Nat.Phone_Brand + " phone, which has a memory size of " + Nat.Phone_Memory + " and the color of it is " + Nat.Phone_Color + ".";
}
//End Creating Constructors

var b = string; // Testing assigning a variable a reserved word as its value and displaying it
var string = f;
document.write(string);
document.write(b);

function Hold_Function() { // Wrote nested functions that subtract the values and display the results
    document.getElementById("Nested_Function").innerHTML = Holder_Function();
    function Holder_Function() {
        var First_Number = 10;
        function Minus_Function() {First_Number -= 1};
        Minus_Function();
        return First_Number;
    }
}