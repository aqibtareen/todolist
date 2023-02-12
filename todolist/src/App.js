import React, { useState } from 'react'; 
import './App.css';
const App = () => (
  <div className="app">
    <Header />
    <TodoList />
    <Footer />
  </div>
);

const Header = () => (
  <header className="header">
    <h1>My React Application for ToDo List</h1>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>By Aqib Tareen</p>
  </footer>
);

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");




  const handleTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, {
      task: taskInput,
      category: category,
      priority: priority,
      dueDate: dueDate
    }]);
    setTaskInput("");
    setCategory("");
    setPriority("");
    setDueDate("");
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAddTask}>
        <input type="text" value={taskInput} onChange={handleTaskInput} placeholder="Task" />
        <select value={category} onChange={handleCategory}>
          <option value="">Select Category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
        </select>
        <select value={priority} onChange={handlePriority}>
          <option value="">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" value={dueDate} onChange={handleDueDate} />
        <button type="submit">Add Task</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.task}</td>
              <td>{task.category}</td>
              <td>{task.priority}</td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;