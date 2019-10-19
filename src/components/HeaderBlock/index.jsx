import React from 'react';
import {Link} from "react-router-dom";
import './header.scss';

const UserHeaderBlock =({firstName, lastName})=>(
    <div className="header-block__user">
        <img className="avatar" src="http://gsdl.org.in/gsdl%20image/user.png" alt=""/>
        <span className="full-name">{firstName} {lastName}</span>
    </div>
);
const Navigation = ({firstName, lastName})=>{
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? <UserHeaderBlock firstName={firstName} lastName={lastName}/>: <AuthNavigationBlock/>;

};
const AuthNavigationBlock = ()=>(
    <section className="nav-bar">
        <Link to="/sign_up" className="nav-bar__link"> Sign Up </Link>
    </section>
);

const HeaderBlock = ({firstName, lastName}) => (
    <div className="header-block">
        <div className="container">
            <section className="header-block__logo">
                <img src="http://www.lakeshorecampresort.com/pictures/NewIcons/Calendar.png" alt="calendar"/>
                <div className="header-block__logo-title">Vacation</div>
            </section>
            <Navigation lastName={lastName} firstName={firstName}/>
        </div>
    </div>
);

export default HeaderBlock;
