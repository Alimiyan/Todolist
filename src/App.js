import React from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  return (
   <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <Form />
      <Todolist />
   </div>
  );
}

export default App;