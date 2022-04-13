import React from 'react'
import Todo from './Todo'

function Todolist({toDos, setToDos}) {
  return (
    <div>
        <div className="todos">
          {toDos.map(todo =>(
              <Todo toDos={toDos} setToDos={setToDos} key={todo.id} text={todo.text} todo={todo}/>
          ))}
        </div>

    </div>
  )
}

export default Todolist