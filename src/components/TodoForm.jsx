import React, {useState} from 'react'





const TodoForm = (props) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
    }
  return (
    <fieldset>
        <legend>TodoForm</legend>
        <form onSubmit= {handleSubmit}>
            <label htmlFor="todo">Add Todo</label>
            <input type="text" name='todo' onChange={(e) => setTodo(e.target.value)} value ={todo}/>
            <input type="submit" value="submit"/>
        </form>
    </fieldset>
  )
}

export default TodoForm