// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim(); // Get and trim the input

    if (taskText !== "") { // Ensure the input is not empty
        const li = document.createElement("li"); // Create a new list item
        li.textContent = taskText; // Set the task text

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li); // Remove the task when button is clicked
        });

        li.appendChild(deleteButton); // Add the delete button to the list item
        taskList.appendChild(li); // Append the new task to the task list
        taskInput.value = ""; // Clear the input field
    }
});