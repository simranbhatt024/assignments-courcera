(function (s) {
  // Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // Do not attach the speakWord variable to the 'byeSpeaker' object
  var speakWord = "Good Bye";

  // Rewrite the 'speak' function such that it is attached to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the 'byeSpeaker' object to the global scope
  s.byeSpeaker = byeSpeaker;

})(s);
