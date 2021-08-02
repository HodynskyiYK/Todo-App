import React from 'react';

const PostItem = ({ post }) => {

    return (
        <div className="col-4 mb-4">
            <div className="card">
                <div className="card-header">{ post.title }</div>
                <div className="card-body">{ post.body }</div>
            </div>
        </div>
    );
};

PostItem.defaultProps = {
    post: {
        id: 1,
        title: 'Default title',
        body: 'Default post description'
    }
};

export default PostItem;