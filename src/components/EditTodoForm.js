import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    //On default if you submit a form, the page reloads, but we need to prevent that by doing:
    //e.preventDefault will prevent it.
    //By doing the "addTodo" you are adding the prop which will parse and transfer the data
    const handleSubmit = e => {
        e.preventDefault();
        
         editTodo(value, task.id);

        setValue("")
    }
    return(

        //This is for the form to add a task in
        //onChange is what sets the value that is being typed in the text box.

        <form className = 'TodoForm' onSubmit={handleSubmit}> 
            <input type = "text" className='todo-input' value={value}
            placeholder='Update The Task?' onChange={(e) => setValue(e.target.value)}/>

            <button type = 'submit' className = 'todo-btn'>
               Update Task
            </button>

        </form>
    )
}  