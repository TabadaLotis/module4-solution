// Define helloSpeaker object
var helloSpeaker = {};
helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
    document.getElementById("greetings").innerHTML += "Hello " + name + "<br>";
};

// Define goodbyeSpeaker object
var goodbyeSpeaker = {};
goodbyeSpeaker.speak = function(name) {
    console.log("Goodbye " + name);
    document.getElementById("greetings").innerHTML += "Goodbye " + name + "<br>";
};

// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop through names and print greetings
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        goodbyeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}
