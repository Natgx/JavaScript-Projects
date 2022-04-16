function My_First_Function() { // Creating a function that utilizes document.getElementById to create an event when the button on the HTML file is clicked
    var str = "This is the button text"
    document.getElementById("Button_Text").innerHTML = str;
}

function lets_concatenate() { // Same scenario here as the function above, the only difference is that there is no button here and that when the paragraph is clicked it will create a even which shows the concatenated strings.
    var dogs_name = "My dog\'s name"
    dogs_name += " is Fydo."
    document.getElementById("Concatenate").innerHTML = dogs_name;
}