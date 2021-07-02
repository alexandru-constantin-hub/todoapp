
import './App.css';
import React from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';


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

  const filters = [{statusFilter: "IU", textFilter: "Important - Urgent"}, {statusFilter: "NIU", textFilter: "Non important - Urgent"}, {statusFilter:"INU", textFilter:"Important - Non Urgent"}, {statusFilter: "NINU", textFilter: "Non important - Non urgent"}];

  return (
    
    <Container maxWidth="md">
       <TodoForm addTodo={addTodo} />
      <Grid container>
        {filters.map((filter)=>
             <Grid container md={6} space={1}>
                <List>
                  {todos.filter(item => item.status===filter.statusFilter && item.completed==="false").map((todo, index) => (
                    <div>
                      <h2>{filter.textFilter}</h2>
                      <Todo key={index} index={index} text={todo.text} status={todo.status} completed={todo.completed} completeTodo={completeTodo} />
                    </div>
                  ))}
                </List>
            </Grid>
            )}
      </Grid>
      <Grid container>
        <List>
          {todos.filter(item => item.completed==="true").map((todo, index) => (
            <Todo key={index} index={index} text={todo.text} status={todo.status} completed={todo.completed} completeTodo={completeTodo} />
          ))}
        </List>
      </Grid>
    </Container>
  );
}

export default App;
