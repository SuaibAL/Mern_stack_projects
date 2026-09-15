const changeTextBtn = document.getElementById("changeTextBtn");
const heading = document.getElementById("heading");

changeTextBtn.addEventListener("click", function () {
  heading.textContent = "Hello JavaScript";
});

const changeParagraphBtn = document.getElementById(
  "changeParagraphBtn"
);

const paragraph = document.getElementById("paragraph");

changeParagraphBtn.addEventListener("click", function () {
  paragraph.textContent = "I love JavaScript.";
});

const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const showHideParagraph = document.getElementById(
  "showHideParagraph"
);

showBtn.addEventListener("click", function () {
  showHideParagraph.style.display = "block";
});

hideBtn.addEventListener("click", function () {
  showHideParagraph.style.display = "none";
});

const changeColorBtn = document.getElementById(
  "changeColorBtn"
);

const colorBox = document.getElementById("colorBox");

changeColorBtn.addEventListener("click", function () {
  colorBox.style.backgroundColor = "yellow";
});
let increaseNumber = 0;

const increaseBtn = document.getElementById("increaseBtn");
const increaseNumberText = document.getElementById(
  "increaseNumber"
);

increaseBtn.addEventListener("click", function () {
  increaseNumber++;

  increaseNumberText.textContent = increaseNumber;
});
let decreaseNumber = 10;

const decreaseBtn = document.getElementById("decreaseBtn");
const decreaseNumberText = document.getElementById(
  "decreaseNumber"
);

decreaseBtn.addEventListener("click", function () {
  decreaseNumber--;

  decreaseNumberText.textContent = decreaseNumber;
});

let counter = 0;

const counterText = document.getElementById("counter");

const counterIncreaseBtn = document.getElementById(
  "counterIncreaseBtn"
);

const counterDecreaseBtn = document.getElementById(
  "counterDecreaseBtn"
);

const resetBtn = document.getElementById("resetBtn");


counterIncreaseBtn.addEventListener("click", function () {
  counter++;

  counterText.textContent = counter;
});


counterDecreaseBtn.addEventListener("click", function () {
  counter--;

  counterText.textContent = counter;
});


resetBtn.addEventListener("click", function () {
  counter = 0;

  counterText.textContent = counter;
});

const nameInput = document.getElementById("nameInput");
const showNameBtn = document.getElementById("showNameBtn");

const nameOutput = document.getElementById("nameOutput");

showNameBtn.addEventListener("click", function () {
  const name = nameInput.value;

  nameOutput.textContent = "Hello " + name;
});

const myImage = document.getElementById("myImage");

const changeImageBtn = document.getElementById(
  "changeImageBtn"
);

changeImageBtn.addEventListener("click", function () {
  myImage.src = "https://picsum.photos/id/1025/300/200";
});

const colorParagraph = document.getElementById(
  "colorParagraph"
);

const changeTextColorBtn = document.getElementById(
  "changeTextColorBtn"
);

changeTextColorBtn.addEventListener("click", function () {
  colorParagraph.style.color = "red";
});

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");

const loginMessage = document.getElementById(
  "loginMessage"
);

loginBtn.addEventListener("click", function () {
  if (
    username.value === "admin" &&
    password.value === "1234"
  ) {
    loginMessage.textContent = "Login Successful";
  } else {
    loginMessage.textContent =
      "Invalid Username or Password";
  }
});

const ageInput = document.getElementById("ageInput");

const ageCheckBtn = document.getElementById(
  "ageCheckBtn"
);

const ageResult = document.getElementById("ageResult");


ageCheckBtn.addEventListener("click", function () {
  const age = Number(ageInput.value);

  if (age >= 18) {
    ageResult.textContent = "You can vote.";
  } else {
    ageResult.textContent = "You cannot vote.";
  }
});

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

const addBtn = document.getElementById("addBtn");

const addResult = document.getElementById("addResult");


addBtn.addEventListener("click", function () {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);

  const result = num1 + num2;

  addResult.textContent = "Result = " + result;
});

const evenOddInput = document.getElementById(
  "evenOddInput"
);

const evenOddBtn = document.getElementById(
  "evenOddBtn"
);

const evenOddResult = document.getElementById(
  "evenOddResult"
);


evenOddBtn.addEventListener("click", function () {
  const number = Number(evenOddInput.value);

  if (number % 2 === 0) {
    evenOddResult.textContent =
      number + " is Even";
  } else {
    evenOddResult.textContent =
      number + " is Odd";
  }
});


const todoInput = document.getElementById("todoInput");

const addTodoBtn = document.getElementById(
  "addTodoBtn"
);

const todoList = document.getElementById("todoList");


addTodoBtn.addEventListener("click", function () {
  const task = todoInput.value;

  if (task !== "") {
    const li = document.createElement("li");

    li.textContent = task;

    todoList.appendChild(li);
    todoInput.value = "";
  }
});
