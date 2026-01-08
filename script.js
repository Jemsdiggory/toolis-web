const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

const clickSound = new Audio("assets/sfxbutton.mp3");
clickSound.volume = 0.5;

const clearCompletedBtn = document.getElementById("clear-completed");


function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  playClick();

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = text;
  deleteBtn.textContent = "⭕️";

  
  li.addEventListener("click", () => {
  playClick();

  if (li.classList.contains("completed")) {
    li.classList.remove("completed");
    list.appendChild(li);
  } else {
    li.classList.add("completed");
    completedList.appendChild(li);
  }
});



  deleteBtn.addEventListener("click", () => {
    playClick();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});

clearCompletedBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  playClick();
  completedList.innerHTML = "";
});

