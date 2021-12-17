import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor appointment", time: "Feb 21 2022", remind: true },
    { id: 2, text: "Christmas chopping", time: "Feb 21 2022", remind: true },
    { id: 3, text: "Buy a new bike", time: "Feb 21 2022", remind: true },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete");
  };
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remind: !task.remind } : task
      )
    );
  };
  const AddTaskHandler = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={AddTaskHandler} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
