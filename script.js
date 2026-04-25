let tasks = [
  { id: 1, title: "Klára HTML", done: false },
  { id: 2, title: "Klára CSS", done: false },
  { id: 3, title: "Klára JS", done: false },
];

const tasklist = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");

function renderTask() {
  tasklist.innerHTML = "";

  for (let task of tasks) {
    const li = document.createElement("li");

    if (task.done) {
      li.classList.add("done");
    }

    li.innerHTML = `<span>${task.title}<span/>
    <div>
    <button onclick="toggleTask(${task.id})">√</button>
    <button onclick="deleteTask(${task.id})">X</button>
    `;

    tasklist.appendChild(li);
  }

  updateStats();
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    title: taskInput.value,
    done: false,
  };

  tasks.push(newTask);
  taskInput.value = "";

  renderTask();
});

function toggleTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.done = !task.done;
    }
  }
  renderTask();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTask();
}

function updateStats() {
  totalCount.textContent = tasks.length;

  let done = 0;
  for (let task of taskes) {
    if (task.done) {
      done++;
    }
  }

  doneCount.textContent = done;
}

renderTask();
