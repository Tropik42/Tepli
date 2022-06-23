import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="ueb-button">
            {children}
        </button>
    );
};

export {MyButton};