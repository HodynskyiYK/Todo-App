import React from 'react';
import PostsList from "./components/PostsList";
import TodosList from "./components/TodosList";

const App = () => {

    return (
        <div className="container">
            <h1>App</h1>
            <hr />
            <PostsList />
            <hr/>
            <TodosList />
            <hr/>
        </div>
    );
};

export default App;