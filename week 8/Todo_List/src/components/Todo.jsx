import React, { useState, useEffect } from "react";
import tasksData from "./task.json";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

 
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(tasksData);
      localStorage.setItem("tasks", JSON.stringify(tasksData));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newTaskObj = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  const updateTaskTitle = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="app">
      <h1>To Do List</h1>

      
      <form onSubmit={addTask}>
        <input
          type="text"
         placeholder="Enter new task"
          
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Add Task</button>
      </form>

     
      {tasks.length === 0 ? (
        <p><h4>No tasks available. Add a few tasks</h4></p>
      ) : (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.completed ? "completed" : ""}>
                
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) =>
                    updateTaskTitle(task.id, e.target.value)
                  }
                />
                <button onClick={() => deleteTask(task.id)}>Delete Task</button>
              </li>
            ))}
          </ul>

          <button className="clear" onClick={clearAll}>
            Clear All Tasks
          </button>
        </>
      )}
    </div>
  );
}

export default App;
