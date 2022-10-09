function shout(string) {
  return string.toUpperCase(string);
}
function whisper(string) {
  return string.toLowerCase(string);
}

function logShout(string) {
  console.log(string.toUpperCase(string));
}

function logWhisper(string) {
  console.log(string.toLowerCase(string));
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase(string)) {
    return "I can't hear you!";
  } else if (string.toUpperCase(string) === string) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
