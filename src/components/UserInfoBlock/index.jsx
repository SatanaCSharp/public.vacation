import React from 'react';
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import "./header_block.scss";
const FullNameBlock = ({firstName, lastName}) =>(
    <section className="full-name">
    <h3 className="title"> Full Name </h3>
    <section className="full-name__info">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
    </section>
</section>
);
const EmailBlock = ({email}) => (
    <section className="email">
        <h3 className="title"> Email </h3>
        <section className="email__info">
            <span className="email-data">{email}</span>
        </section>
    </section>
);
const HiredDateBlock = ({hiredDate}) => (
    <section className="hired-date">
        <h3 className="title"> Hired Date </h3>
        <section className="hired-date__info">
            <span className="date">{hiredDate}</span>
        </section>
    </section>
);
const BalanceBlock = ({balance}) => (
    <section className="balance">
        <h3 className="title"> Balance </h3>
        <section className="balance__info">
            <span className="quantity">{balance}</span>
        </section>
    </section>
);
const EditLinkBlock = ({userId})=>(
    <section className="link">
        <Link to={"/user/edit/"+userId} className="link__edit"><FiEdit2 color={"#fff"} /></Link>
    </section>
);
const UserInfoBlock = ({userId, firstName, lastName, email, hiredDate, balance })=> (
    <section className="user-info">
        <section className="user-info__avatar">
            <EditLinkBlock
                userId={userId}
            />
            <img  src="http://gsdl.org.in/gsdl%20image/user.png" alt=""/>
        </section>
        <section className="user-info__details">
            <FullNameBlock
                firstName={firstName}
                lastName={lastName}
            />
            <EmailBlock email={email}/>
            <HiredDateBlock hiredDate={hiredDate}/>
            <BalanceBlock balance={balance}/>
        </section>
    </section>
);
export default UserInfoBlock;