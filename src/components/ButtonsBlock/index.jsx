import React from 'react';
import './buttons.scss';
const SuccessButton = ({buttonTitle, handleButtonClick, }) => (
    <button className={"success-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);

export {SuccessButton};
