import React from 'react';
const HeaderBlock = ({firstName, lastName}) => {
    return (
        <div className="header-block">
            <div className="container">
                <div className="header-block__logo">
                    <img src="http://www.lakeshorecampresort.com/pictures/NewIcons/Calendar.png" alt="calendar"/>
                    <div className="header-block__logo-title">Vacation</div>
                </div>
                <div className="header-block__user">{firstName} {lastName}</div>
            </div>
        </div>
    )
}
export default HeaderBlock;