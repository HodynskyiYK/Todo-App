import React from 'react';
import PostItem from "./PostItem";

const PostsList = () => {

    return (
        <>
            <h2>Posts</h2>
            <div className="row">
                <PostItem />
            </div>
            <div className="text-center">
                <button className="btn btn-primary">Load post</button>
            </div>
        </>
    );
};

export default PostsList;