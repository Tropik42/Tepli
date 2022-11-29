import React from 'react';

const MyButton = ({children, ...props}) => (
    <button {...props} className="ueb-button">
        {children}
    </button>
);

export {MyButton};
