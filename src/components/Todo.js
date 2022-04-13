import React from 'react'

function Todo({text, toDos, setToDos, todo}) {
    const deleteHandler=()=>{
        setToDos(toDos.filter((el)=> el.id !== todo.id))
    }
    const completeHandler=()=>{
        setToDos(toDos.map(item=>{
            if(item.id === todo.id){
                return{
                    ...item,completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className="todo">
        <div className="left">
            <input onClick={completeHandler} value='adfsdf' type="checkbox" name="" id="" />
            <p className={todo.completed ? "completed" : ""}>{text}</p>
        </div>
        <div className="right">
            <i onClick={deleteHandler} className="fas fa-times"></i>
        </div>
    </div>
  )
}

export default Todo