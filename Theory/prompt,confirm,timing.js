// // Confirm 

// confirm box
let confirmAge = confirm("Are you 18 years old?");
if (confirmAge === true) {
  alert("Allowed");
} else {
  alert("Denied");

  // Prompt

  let userName = prompt("Enter your name");
  if (userName === null || userName === "") {
    alert("Welcome user");
  } else {
    alert(`Welcome ${userName}`);
  }

  // prompt has second param
  let userName = prompt("Enter your name", "someone");
  alert(userName);

  // Timing (setTimeout and setInterval)
  // setTimeout() 
  var timeOut = setTimeout(function () {
        console.log("Time us out!");
      }, 3000
      // clear
      clearTimeout(timeOut);

      var timeInterval = (function () {
        console.log("This is an inerval");
      }, 1000);
      // clear
      clearInterval(timeInterval);