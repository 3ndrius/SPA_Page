import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-primary">{props.title}</button>
    );
}

export default Button;
