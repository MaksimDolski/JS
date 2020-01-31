function first() {
  // Simulate a code delay
  setTimeout(function(){console.log(1);}, 500);
}

function second() {
  console.log(2);
}

first();
second();

// Callback
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework("math", function() {console.log("Finished my homework");});

// Callback
function doHomework(subject, callback) {
  console.log(`Startind my ${subject} homework`);
  callback();
}

function finished() {
  console.log('Finished my homework!');
}

doHomework("English", finished);

//uhiuhiopu 
