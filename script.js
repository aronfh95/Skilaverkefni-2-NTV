let tasks = [
  { id: 1, title: "Klára HTML", done: true },
  { id: 2, title: "Klára CSS", done: false },
  { id: 3, title: "Klára JS", done: true },
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

    li.innerHTML = `<span>${task.title}</span>
    <div>
    <button onclick="toggleTask(${task.id})">✓</button>
    <button onclick="editTask(${task.id})">Breyta</button>
    <button onclick="deleteTask(${task.id})">x</button>
    `;

    tasklist.appendChild(li);
  }

  updateStats();
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (editId !== null) {
    for (let task of tasks) {
      if (task.id === editId) {
        task.title = taskInput.value;
      }
    }

    editId = null;
    taskForm.querySelector("button").textContent = "BÆTA VIÐ";
  } else {
    const newTask = {
      id: Date.now(),
      title: taskInput.value,
      done: false,
    };
    tasks.push(newTask);
  }
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

function editTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      taskInput.value = task.title;
      editId = id;
      taskForm.querySelector("button").textContent = "VISTA";
    }
  }
  taskInput.focus();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTask();
}

function updateStats() {
  totalCount.textContent = tasks.length;

  let done = 0;
  for (let task of tasks) {
    if (task.done) {
      done++;
    }
  }

  doneCount.textContent = done;
}

renderTask();
