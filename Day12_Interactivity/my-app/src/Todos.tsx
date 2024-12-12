import { useState } from "react";

interface Task {
  id: number;
  taskName: string;
}

/* write a todolist with add, delete, edit feature */
export const Todos = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
 

  const newTaskHandler = (e) => {
    setNewTask(e.target.value);
  };

  const todoListHandler = () => {
    const task :Task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask

    }
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
    setNewTask("");
  };

  const deleteTaskHandler = (id : number) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });

    setTodoList(newTodoList);
  };

  const editTaskHandler = (id : number) => {
    const taskToEdit = todoList.find((task) => task.id === id);

  }

  return (
    <div className="App">
      <div className="addTask">
        <h1>ToDo List</h1>
        <input
          type="text"
          required
          placeholder="add task"
          value={newTask}
          onChange={newTaskHandler}
        />
        <button onClick={todoListHandler}>Add Task</button>
        <div>
        <h5>Gender</h5>
        <select>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        </div>
        <div>
        <label><input type="radio" value="option1"  />option1</label>
        <label><input type="radio" value="option2"/>option2</label>
        <label><input type="radio" value="option3"/>option3</label>
        </div>
        <div>
          <label><input type="checkbox"/>123</label>
          <label><input type="checkbox"/>456</label>
          <label><input type="checkbox"/>789</label>
        </div>
        
        
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
              <button onClick={() => editTaskHandler(task.id)}>Edit</button>
            </div>

          );
        })}
      </div>
    </div>
  );
};
