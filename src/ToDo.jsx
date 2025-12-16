import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./todo.css";

export default function TodoList(){
   let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4()}]);
   let [newTodo,setNewTodo]=useState ("");

  let addNewTask =() => {
if (newTodo.trim() === "") return; 
setTodos((prevTodos)=>{
 return [...prevTodos,{task:newTodo,id:uuidv4()}]; 
});
    setNewTodo("");
  };

  let updateTodoVal=(event)=>{
setNewTodo(event.target.value);
  };
  
 
 
let deleteTodo=(id)=>{
setTodos((prevTodos) => prevTodos.filter((todo)=> todo.id != id));
};

let upperCaseTodo=(id)=>{
setTodos((prevTodos) => prevTodos.map((todo)=> {
  if(todo.id === id){
    return {
      ...todo,
      task: todo.task.toUpperCase()
    };
  }
  return todo;
})
);
};


let  upperCaseAll = () => {
setTodos((prevTodos)=>prevTodos.map((todo)=>({
...todo,
task: todo.task.toUpperCase()
}
))
);
};


let deleteAll =() => {
setTodos([]);
};

let completedAll = ()=>{
setTodos((prevTodos)=>
   prevTodos.map((todo) => ({
  ...todo,
      completed: true
}))
);
};

let completeTodo = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: true
        };
      }
      return todo;
    })
  );
};




  return (
<div class="todo-container">
    <input placeholder="add a task"  value={newTodo} onChange={updateTodoVal} class="input"></input>
    &nbsp;
    <button onClick={addNewTask} class="btn">Add Task</button>
    <br></br>
      <br></br>
        <br></br>

        <hr></hr>
        <h4>Tasks To do :</h4>
        <ul>
            {
                todos.map((todo)=> (
                     <li key={todo.id} class="todo-item">
                     <span  style={{textDecoration: todo.completed ? "line-through" : "none"}}> {todo.task} </span>
                     
                     <button onClick={()=> deleteTodo(todo.id)} class="btn-delete">delete</button>
                     
                        <button onClick={() => upperCaseTodo(todo.id)} class="btn-upper">UpperCase </button>
                        
                         <button onClick={() => completeTodo(todo.id)} class="btn-complete">completed</button>
                      </li>
                )  
                )
            }
        </ul>

        <br></br>
        <button onClick={upperCaseAll} class="btn-allUpperCase">uperCase All</button>
         &nbsp;        
         <button onClick={deleteAll} class="btn-allDelete">delete All</button>
   &nbsp;   
 <button onClick={completedAll} class="btn-allCompleted"> All completed</button>
</div>

    );
}