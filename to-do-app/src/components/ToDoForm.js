import React,{useState} from 'react'

function ToDoForm() {
    const [input,setInput] = useState('');

    return (
        <form className="todo-form">
            <input type="text" 
            className="todo-input"
            placeholder="Add a todo" 
            value={input} 
            name="text"/>

            <button className="todo-button">Add To Do</button>
        </form>
    )
}

export default ToDoForm
