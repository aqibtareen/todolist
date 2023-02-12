import React, { useState } from 'react';
import './App.css';
const Todo = ({ todo, index, completeTodo, removeTodo, updateTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => updateTodo(index)}>Update</button>
      </div>
      <div>
        <p>Priority: {todo.priority}</p>
        <p>Category: {todo.category}</p>
        <p>Deadline: {todo.deadline}</p>
        <p>Reminder: {todo.reminder}</p>
        <p>Delegated to: {todo.delegatedTo}</p>
        <p>Status: {todo.status}</p>
        <p>Dependencies: {todo.dependencies}</p>
        <p>Collaborators: {todo.collaborators}</p>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add a new task..."
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false,
      priority: 'High',
      category: 'Work',
      deadline: '2023-03-01',
      reminder: '2022-02-28',
      delegatedTo: 'John Doe',
      status: 'Not started',
      dependencies: 'None',
      collaborators: 'Jane Doe'
    },
    {
      text: 'Buy groceries',
      isCompleted: false,
      priority: 'Low',
      category: 'Personal',
      deadline: '2023-02-15',
      reminder: '2022-02-14',
      delegatedTo: '',
      status: 'Not started',
      dependencies: 'None',
      collaborators: ''
    },
    {
      text: 'Pay bills',
      isCompleted: false,
      priority: 'High',
      category: 'Personal',
      deadline: '2023-02-28',
      reminder: '2022-02-27',
      delegatedTo: '',
      status: 'Not started',
      dependencies: 'None',
      collaborators: ''
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = index => {
    // add code to update a todo here
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
