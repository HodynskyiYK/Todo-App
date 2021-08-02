import React from 'react';
import PostsList from "./components/PostsList";
import TodosList from "./components/TodosList";

const App = () => {

    return (
        <>
            <header className="text-center">Header</header>
            <div className="container">
                <h1>App</h1>
                <hr />
                <PostsList />
                <hr/>
                <TodosList />
                <hr/>
            </div>
            <footer className="text-center">Footer</footer>
        </>
    );
};

export default App;