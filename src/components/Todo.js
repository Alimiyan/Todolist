import React from 'react'

function Todo({text}) {
  return (
    <div className="todo">
        <div className="left">
            <input value='adfsdf' type="checkbox" name="" id="" />
            <p>{text}</p>
        </div>
        <div className="right">
            <i className="fas fa-times"></i>
        </div>
    </div>
  )
}

export default Todo