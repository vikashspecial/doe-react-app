import { useState } from "react";
import "./style.css";

function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onCreate = async () => {
        const response = await fetch(`https://career-pathways-tasksapi.azurewebsites.net/tasks`, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const result = await response.json();

            setTitle("");
            setDescription("");

            props.onChange();
    };

    return (
        <div>
            <h3>{props.title}:</h3>
            

            <form className="form-container">
                <div className="form-input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }} className="form-input" />
                </div>
                <div className="form-input-container">
                    <label htmlFor="task">description</label>
                    <textarea id="task" onChange={(e) => {
                        setDescription(e.target.value);
                    }} value={description} className="form-input" rows="3" cols="20"></textarea>
                </div>

                <div className="form-input-container actions">
                    <input className="btn btn-secondary" type="reset" value="Reset" />
                    <input className="btn btn-primary" onClick={onCreate} type="button" value="Create" />
                </div>
            </form>
        </div>
    )
}

export default CreateTodo;