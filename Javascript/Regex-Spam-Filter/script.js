const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// i = case insensitive
// + matches one or more of the preceding element
// [] matches any one of the characters inside the brackets]
// | acts as an OR operator
// () capture group is used to group multiple tokens together. e.g (ab)+ matches one or more occurrences of "ab"
// \s matches any whitespace character (spaces, tabs, line breaks)
// * matches zero or more of the preceding element
// ?: makes the preceding group non-capturing
// a non-capturing group is used for grouping without capturing the matched substring for back-references
// e.g (?:ab)+ matches one or more occurrences of "ab" but does not capture it for back-references
// $ matches the end of a string
const helpRegex = /please help|assist me/i;

const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];
// const isSpam = (msg) => msg.match(helpRegex);
// const isSpam = (msg) => helpRegex.test(msg);
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
