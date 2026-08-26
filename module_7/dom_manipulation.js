const heading = document.getElementById("heading");
const paragraph = document.querySelector("#paragraph");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  heading.textContent = "Hello welcome to JavaScript";
  paragraph.textContent = "DOM Manipulation is Easy!";
  heading.style.color = "blue";
});
const showMessageBtn = document.getElementById("showMessageBtn");
const message = document.getElementById("message");

showMessageBtn.addEventListener("click", function () {
  setTimeout(function () {
    message.textContent = "Hello! 2 seconds completed.";
  }, 2000);
});
const counterDisplay = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let count = 0;
let intervalId = null;

startBtn.addEventListener("click", function () {
  if (intervalId !== null) return; 
  intervalId = setInterval(function () {
    count++;
    counterDisplay.textContent = "Counter: " + count;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function callbackFunction() {
  console.log("Welcome to JavaScript");
}

greet("Amit", callbackFunction);
const callbackOutput = document.getElementById("callbackOutput");
function greetOnPage(name, callback) {
  callbackOutput.textContent = "Hello " + name;
  callback();
}
function callbackFunctionOnPage() {
  callbackOutput.textContent += " - Welcome to JavaScript";
}
greetOnPage("Suaib", callbackFunctionOnPage);