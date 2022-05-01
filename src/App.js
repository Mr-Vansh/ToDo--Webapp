import React, { useState } from 'react';
import './App.css';
import Todo from './Todo'
// MAterial UI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {

  // List (in 'ul') hooks for updating LIST STATE :-
  const[todos , setTodos] = useState([]);

  // Input hooks for updating INPUT state :-
  const[input , setInput] = useState("");

  // onChange function call => ("onUpdate") so that what USER TYPES in INPUT field can be SEEN :-
  const onUpdate = (event) => {
    setInput(event.target.value);
  }

  // FETCHING and SHOWING previously added items from INPUT field to LIST area using "SPREAD OPERATOR" :-
  const addTodo = (event) => {
    event.preventDefault(); // stops auto-refreshing behavior of the page
    setTodos([...todos , input]);
    setInput("");  // clear the input field after hitiing "ADD" button
  }

  return (
    <div className="App">

      <h1>ToDo List</h1>

    <form>
      <TextField 
        id="input-field" 
        label="Add an item..." 
        value={input} 
        onChange={onUpdate}
        variant="outlined" />


      {/* disabled allowed us "NOT TO" add empty string to the list */}
      <Button 
        id='add-btn'
        disabled={!input}  
        variant="contained" 
        type='submit' 
        onClick={addTodo}>
        +
      </Button>

    </form>
      
      
      <br/>
      
      {/* FETCHING ONE-ONE items from the array using "MAP" function */}
        {todos.map(todo => {        // todos = items list stored in array   ,  todo = one item of the particular array
            return <Todo text={todo} />
        })}

    </div>
  );
}

export default App;
