import React from 'react';
const Form = ({ setinputText, inputText, todos, setTodos, setStatous }) => {

    const inputTextHandler = (e) => {
        setinputText(e.target.value);
    }
    const addtodosHandler = (e) => {
        e.preventDefault();
        setTodos(
            [
                ...todos,
                {
                    completed: false,
                    text: inputText,
                    id: Math.floor(Math.random() * 10000),
                }
            ]);
        setinputText(" ");
    }
    const StatousHandler = (e) => {
        setStatous(
            e.target.value
        );
    }

    return (
        <div>
            <form>
                <input
                    value={inputText}
                    type="text"
                    className="todo-input"
                    onChange={inputTextHandler} />
                <button
                    onClick={addtodosHandler}
                    className="todo-button
                " type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select
                        onChange={StatousHandler}
                    name="todos" 
                    className="filter-todo"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
export default Form;