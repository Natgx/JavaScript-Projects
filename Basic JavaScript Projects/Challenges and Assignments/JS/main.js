var n = "My name is Emerald."; // Displays the length of the string
var b = n.length;
document.write(b);

var Instruments = ["Flute", "Violin", "Piano", "Drums", "Banjo"];
var Empty="";
var N;
function for_Loop() {
    for (N = 0; N < Instruments.length; N++) {
        Empty += Instruments[N] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Empty;
}