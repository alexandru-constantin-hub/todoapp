
import './App.css';
import React from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoForm';

const data = [
  {text: "Important and urgent", status:"IU", completed: "false"},
  {text: "Non Important and urgent", status:"NIU", completed: "false"},
  {text: "Important and non urgent", status:"INU", completed: "false"},
  {text: "Non important and non urgent", status:"NINU", completed: "false"},
]

function App() {
  const [todos, setTodos] = React.useState(data);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = "true";
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} text={todo.text} status={todo.status} completed={todo.completed} completeTodo={completeTodo} />
        ))}

      </ul>
      <TodoForm addTodo={addTodo} />
      <div>
      {todos.map((todo, index) => ( 
          <Todo key={index} index={index} text={todo.text} status={todo.status} completed={todo.completed} completeTodo={completeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
