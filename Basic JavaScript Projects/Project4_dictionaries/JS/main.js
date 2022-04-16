function Fruit_Dictionary() { // Created a Dictionary using a function, within it are key-value pairs
    var Fruit = {
        type: "Apple",
        color: "Red",
        size: "5cm"
    };
    delete Fruit.size; // Deletes the selected key-value pair in the Dictionary 
    document.getElementById("Dictionary").innerHTML = Fruit.size; // Displays the selected value in the Dictionary in the element with the chosen ID in document.getElementById
}