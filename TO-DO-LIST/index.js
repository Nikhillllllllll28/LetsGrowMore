document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const congratsEmoji = document.getElementById('congratsEmoji');

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteButton">Delete</button>
            `;
            li.classList.add("fade-in");
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
    
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteButton")) {
            const li = event.target.parentElement;
            li.classList.add("fade-out");
            li.addEventListener("animationend", function () {
                li.remove();
            });
        }
    });
});
