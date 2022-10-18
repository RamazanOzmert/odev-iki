import {useState} from "react";

function List({todos,setTodos,todo}) {   
    const isCompleted=()=>setTodos(todos.map(item=>
        (item.id==todo.id ? {...item,completed: !item.completed} : item) 
    ))

    const deleteItem=()=>setTodos(todos.filter(item=> item.id !==todo.id))

    return (
        <div>
            <li key={todo.id} className={todo.completed ? "completed":""}>
                <div className="view">
                    <input type="checkbox" className="toggle" onClick={isCompleted}></input>
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={deleteItem}></button>
                </div>
            </li>
        </div>
    );
}

export default List;