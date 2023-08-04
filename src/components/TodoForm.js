import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    //On default if you submit a form, the page reloads, but we need to prevent that by doing:
    //e.preventDefault will prevent it.
    //By doing the "addTodo" you are adding the prop which will parse and transfer the data
    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value);

        setValue("")
    }
    return(

        //This is for the form to add a task in
        //onChange is what sets the value that is being typed in the text box.

        <form className = 'TodoForm' onSubmit={handleSubmit}> 
            <input type = "text" className='todo-input' value={value}
            placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>

            <button type = 'submit' className = 'todo-btn'>
                Add Task
            </button>

        </form>
    )
}  