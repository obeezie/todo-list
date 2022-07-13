import React, { useState } from 'react'

const TodoDisplay = (props) => {
    const [isCompleted, setIsCompleted]= useState(false);

    const handleDelete = (arrayIdx) => {
        const filteredList = props.todo.filter((element, i) =>{
            return i !== arrayIdx
        })
        props.onTodoUpdate(filteredList);
    }

    

    {console.log(props)}
  return (
    <fieldset>
        <legend>TodoDisplay</legend>
        {
            props.todo.map((todo, i) =>{
                return(
                    <div key={i}>
                    <span >
                        {todo}
                        <input type="checkbox" name="todo" checked={isCompleted} onChange = {e => setIsCompleted(e.target.checked)}/>
                        <button onClick={(e)=>handleDelete(i)}>Delete</button>
                    </span>
                    </div>
                )
            })
        }
    </fieldset>
  )
}

export default TodoDisplay