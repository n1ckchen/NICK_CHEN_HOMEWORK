import { useState } from "react";

interface Tasks {
  id: number;
  taskName: string;
}

/* Write a ToDo List with add, delete, and edit features */
export const Todos = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]); // Renamed todoList to tasks
  const [taskInput, setTaskInput] = useState<string>(""); // Renamed newTask to taskInput
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null); // Renamed editingTodo to editingTaskId
  const [editedTaskName, setEditedTaskName] = useState<string>(""); // Renamed editedText to editedTaskName

  // Handle change in task input field
  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  // Add new task to the list
  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask: Tasks = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        taskName: taskInput,
      };
      setTasks([...tasks, newTask]);
      setTaskInput(""); // Reset task input
    }
  };

  // Delete a task by its ID
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const handleStartEditing = (task: Tasks) => {
    setEditingTaskId(task.id); // Set the task ID being edited
    setEditedTaskName(task.taskName); // Set the task name for editing
  };

  // Save the edited task
  const handleSaveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, taskName: editedTaskName } : task
      )
    );
    setEditingTaskId(null); // Reset editing state
    setEditedTaskName(""); // Clear the edited task name
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1>ToDo List</h1>
        <input
          type="text"
          required
          placeholder="Add task"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="list">
        {tasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskName}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <span>{task.taskName}</span>
            )}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleStartEditing(task)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};
