import React from 'react';
import TodoItem from "./TodoItem";

const TodosList = () => {

    return (
        <>
            <h2>Todos</h2>
            <div className="row">
                <TodoItem />
            </div>
            <div className="text-center">
                <button className="btn btn-success">Load todos</button>
            </div>
        </>
    );
};

export default TodosList;