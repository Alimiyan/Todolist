import React from 'react'
import Todo from './Todo'

function Todolist({toDos}) {
  return (
    <div>
        <div className="todos">
          {toDos.map(todo =>(
              <Todo text={todo.text}/>
          ))}
        </div>

    </div>
  )
}

export default Todolist