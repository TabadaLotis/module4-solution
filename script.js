// Array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over each name
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        // If name starts with 'j' or 'J', use goodbyeSpeaker
        goodbyeSpeaker.speak(names[i]);
    } else {
        // Otherwise, use helloSpeaker
        helloSpeaker.speak(names[i]);
    }
}
