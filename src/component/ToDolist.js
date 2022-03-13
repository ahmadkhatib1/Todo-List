import React from 'react';
// ============ import component==============
import Todo from './Todo'
const ToDolist = ({ todos, setTodos, Filteredtodos}) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        Filteredtodos.map((todo) =>
                        
                            <Todo
                                text={todo.text}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                                todo={todo}
                            />
                        )
                    }
                   
                </ul>
            </div>
        </div>
    );
}
export default ToDolist;