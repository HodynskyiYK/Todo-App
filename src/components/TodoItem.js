import React from 'react';

const TodoItem = ({ todo }) => {

    return (
        <div className="col-3 mb-4">
            <div className="card">
                <div className="card-header">{ todo.title }</div>
                <div className="card-body row">
                    <div className="col-auto">
                        <button className="btn btn-success">Done</button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

TodoItem.defaultProps = {
    todo: {
        title: 'Todo Item',
        completed: false
    }
};

export default TodoItem;