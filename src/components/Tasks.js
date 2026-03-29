import { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const toggleTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  return (
    <div className="card">
      <h2>📝 Tasks</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            onClick={() => toggleTask(i)}
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(i);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;