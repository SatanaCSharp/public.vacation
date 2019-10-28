import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputs.scss";
import { Buttons } from "../../";
const HiredDatePicker = ({hiredDate,  handlerHiredDate}) =>(
    <DatePicker
        selected= {hiredDate}
        onChange={handlerHiredDate}
        placeholderText="StartDate"
        calendarClassName = "input-date-picker"
    />
);
const UserEditInputGroup = ({
    firstName,
    lastName,
    email,
    hiredDate,
    handleLastNameInputChange,
    handleFirstNameInputChange,
    handleEmailInputChange,
    handlerHiredDate,
    handleButtonClick,
}) =>(
    <section className="input-group">
        <section className= "input-group__user-name">
            <input type="text" value={firstName} onChange={handleFirstNameInputChange}  className="input-group__user-name_first"placeholder="First Name" autoFocus/>
            <input type="text" value={lastName} onChange={handleLastNameInputChange}  className="input-group__user-name_last"placeholder="Last Name" />
        </section>
        <input type="email" value={email} onChange={handleEmailInputChange}  className="input-group__email" placeholder="Email"/>
        <section className="input-group__date-picker">
            <HiredDatePicker
                hiredDate={hiredDate}
                handlerHiredDate={handlerHiredDate}
            />
        </section>
        <Link to= "/cabinet">
            <Buttons.SuccessButton
                buttonTitle="Edit"
                handleButtonClick={handleButtonClick}
            />
        </Link>
    </section>
);
export default UserEditInputGroup;