import React,{useState,useEffect,useRef} from 'react'

function ToDoForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    
    useEffect(()=>{
        inputRef.current.focus();
    })
    
    const handleChange = (e)=> {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? 
            (
                <>
                    <input type="text" 
                        className="todo-input edit"
                        placeholder="update your todo" 
                        value={input} 
                        name="text"
                        onChange={handleChange}
                        ref = {inputRef}
                        />
                
                        <button className="todo-button edit">Update</button>
                </>
            )
            
            :
            
            (
                <>
                    <input type="text" 
                        className="todo-input"
                        placeholder="Add a todo" 
                        value={input} 
                        name="text"
                        onChange={handleChange}
                        ref = {inputRef}
                    />

                    <button className="todo-button">Add</button>
                </>
            )}
        </form>
    )
}

export default ToDoForm
