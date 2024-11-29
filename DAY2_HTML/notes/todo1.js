const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        //create new li
        const li = document.createElement("li");
        li.textContent = taskText;
        //create delete
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.append(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ""
        
    }

});
