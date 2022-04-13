import React from 'react'

function Form({inputText,setInputText, toDos, setToDos}) {
    const inputTextHandler=(e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitToDoHandler=(e)=>{
        setToDos([...toDos,{text:inputText, completed:false, id:Date.now()}])
        setInputText('')
    }
  return (
      <div>
    <div className="subHeading">
    <br />
    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
  </div>
  <div className="input">
    <input value={inputText} onChange={inputTextHandler} type="text" placeholder="🖊️ Add item..." />
    <i onClick={submitToDoHandler} className="fas fa-plus"></i>
  </div>
  </div>

  )
}

export default Form