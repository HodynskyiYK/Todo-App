import React from 'react';

const Alert = ({ text, type }) => {

    return (
        <div className={`alert alert-${type}`}>
            { text }
        </div>
    );
};

Alert.defaultProps = {
    text: 'Some alert text',
    type: 'primary'
};

export default Alert;