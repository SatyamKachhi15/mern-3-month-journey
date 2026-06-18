const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const addBtn = document.getElementById("addBtn");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value;
    const date = dueDate.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    const task = {
        text: taskText,
        date: date,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    taskInput.value = "";
    dueDate.value = "";
}

function renderTasks() {

    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span style="
                text-decoration: ${task.completed ? "line-through" : "none"};
            ">
                ${task.text} - ${task.date}
            </span>

            <button onclick="toggleTask(${index})">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        if (task.completed) {
            completedList.appendChild(li);
        } else {
            pendingList.appendChild(li);
        }

    });

}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

renderTasks();