// template string - шаблонные строки
var a = "John";
var result = `Hello ${a}!`; // тильда

// template string + function
var name = "Life is good, life is great";

function songName(words) {
  var song = "Song:";
  return `${song} ${words}`;
}
`Now you are listening ${songName(name)}`;