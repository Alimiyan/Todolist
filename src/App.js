import React,{useState} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText,setInputText] = useState('')
  const [toDos,setToDos] = useState([])
  return (
   <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <Form toDos={toDos} setToDos={setToDos} inputText={inputText} setInputText={setInputText} />
      <Todolist toDos={toDos} setToDos={setToDos} />
   </div>
  );
}

export default App;