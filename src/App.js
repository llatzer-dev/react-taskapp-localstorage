/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
