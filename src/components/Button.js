import React from 'react';

const Button = ({onButtonPress}) => {
    return (
        <button className={'App-button'} onClick={() => onButtonPress()}>
            Insure Me
        </button>
    );
}

export default Button;