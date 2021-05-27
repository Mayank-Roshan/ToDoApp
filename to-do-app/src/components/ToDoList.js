import React,{useState} from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function ToDoList() {

    const [todos,setTodos] = useState([]);

    const addToDos = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);

    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo=> todo.id !== id)
        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = ! todo.isComplete;
            }
            return todo;
        })
        setTodos(updateTodos);
    };

    return (
        <div>
            <h1>What is the plan for the day?</h1>
            <ToDoForm onSubmit={addToDos}/>
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}

export default ToDoList
