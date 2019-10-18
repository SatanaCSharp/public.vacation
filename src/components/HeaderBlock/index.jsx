import React from 'react';
import './header.scss';
const HeaderBlock = ({firstName, lastName}) => (
    <div className="header-block">
        <div className="container">
            <div className="header-block__logo">
                <img src="http://www.lakeshorecampresort.com/pictures/NewIcons/Calendar.png" alt="calendar"/>
                <div className="header-block__logo-title">Vacation</div>
            </div>
            <div className="header-block__user">
                <img className="avatar" src="http://gsdl.org.in/gsdl%20image/user.png" alt=""/>
                <span className="full-name">{firstName} {lastName}</span>
            </div>
        </div>
    </div>
);

export default HeaderBlock;