import React from 'react';

function Todo({ text, setTodos, todos, todo }) {
    const dleteHanle = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const ccompletedHandle = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            };
            return item;
        })
        )
    }
    


    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "} `} >{text}</li>
            <button
                className="complete-btn"
                onClick={ccompletedHandle}
            >
                <i className="fas fa-check" aria-hidden="true">
                </i></button>
            <button
                className="trash-btn"
                onClick={dleteHanle}
            >
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Todo;
