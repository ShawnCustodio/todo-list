import React, {useState} from 'react'
import { TodoForm } from './TodoForm';
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
//Use this website for more installations: https://fontawesome.com/docs/web/use-with/react/
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    //To parse value from TodoForm to TodoWrapper we need to use Props
    /*This can be done by adding a property to the TodoForm called addTodo
    
    
    By making this const; It will take the todo value as a function
    Spread operator [...] which makes the copies
    */
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
        completed: false, isEditing: false}])
        console.log(todos)
    }
    /*Take in  an id, setting todos and we're maping through the todos
    first it will take the todo and will check if todo.id equals the id we pass in
    if thats the case, then we'll copy the todo and we are going to update
    the completed value */
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,
        completed: !todo.completed} : todo))
    }
    /*Id is parameter 
    If the todo.id is not equal to the id we pass in then we want to return the value
    we are just removing todo with the id we pass in
    */
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))

    }
    /* it will take in an Id
        checking if todo.id is equal to the id we pass in
        We are making a copy by doing {...} / spread operator
        We are saying isEditing should not be todo.isEditing
        If todo.id is not equal, then we just want to return the todo value
        */
    
        const editTodo = id => 
        {
            setTodos(
                todos.map((todo) =>
                  todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
                )
              );
        }

        /* 
        Map through the todos, which will take in todo and will check todo.id equals the id we pass in
        if this is the case then we will make a copy of the todo using the spread operator and
        then we update task to be the task passed in with isEditing and make it !isEditing
        if the id isn't equal then we just want to return todo.        
        
        */
        const editTask = (task, id) => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, task,
            isEditing: !todo.isEditing} : todo))
        }
    return(
        //generate a todo for each value of the state by doing todos.map
        //Task and key are both considered props
      <div className='TodoWrapper'> 
         <h1>Lets Go Lazy!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task ={todo}/>
                 ) :
                (
                    <Todo task={todo} key={index} 
                    toggleComplete={toggleComplete} deleteTodo = {deleteTodo} 
                    editTodo = {editTodo}/>
             )
               
            ))}
        </div>
    )
}