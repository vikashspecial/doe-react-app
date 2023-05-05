import { useEffect, useState } from "react";
import "./style.css";
import CreateTodo from "../CreateTodo";

function Todo() {
    const [todoList, setTodoList] = useState([]);


    const getToDos = async () => {
        const response = await fetch("https://career-pathways-tasksapi.azurewebsites.net/tasks");
        const result = await response.json();
        setTodoList(result);
    };


    const updateStatus = async (todo) => {

        try {
            const response = await fetch(`https://career-pathways-tasksapi.azurewebsites.net/tasks/${todo.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    completed: !todo.completed
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const result = await response.json();
    
            getToDos();
        } catch(e) {
            alert("Unable to delete. Please try again");
        }
       

    };

    const deleteTodo = async (todo) => {
        const approved = window.confirm(`Are you sure you want to delete "${todo.title}"?`);
        if(approved) {
            const response = await fetch(`https://career-pathways-tasksapi.azurewebsites.net/tasks/${todo.id}`, {
            method: "DELETE",
        });

        const result = await response.json();

        getToDos();
        }
    };



    useEffect(() => {
        getToDos();
    }, []);

    return (
        <div className="todo-container">
            <CreateTodo title="Create" onChange={getToDos} />
            <h1>Todos:</h1>
            <div className="todo-list">
                {todoList.map((todo, index) => {
                    return (
                        <div className="todo-item" onDoubleClick={() => {
                            updateStatus(todo);
                        }} key={index}>
                            <div className="actions">
                            <h3>{todo.id}.</h3>
                            <button onClick={() => {
                                deleteTodo(todo);
                            }}>X</button>
                            </div>
                            <div className="title">{todo.title}</div>
                            <div className="description">{todo.description}</div>
                            <div className={`status ${todo.completed ? "completed" : "not-completed"}`}>
                                {todo.completed ? "Completed" : "Not Completed"}
                            </div>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    );
};

export default Todo;
