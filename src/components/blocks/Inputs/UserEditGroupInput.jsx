import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputs.scss";
import { Buttons } from "../../";
const HiredDatePicker = ({props,  handleInputDateChange}) =>(
    <DatePicker
        selected= {props.hiredDate}
        onChange={handleInputDateChange}
        placeholderText="Hired Date"
        calendarClassName = "input-date-picker"
    />
);
const UserEditInputGroup = ({props, handleInputChange, handleButtonClick, handleInputDateChange}) =>(
    <section className="input-group">
        <section className= "input-group__user-name">
            <input name="firstName" type="text" value={props.firstName} onChange={handleInputChange}  className="input-group__user-name_first"placeholder="First Name" autoFocus/>
            <input name="lastName" type="text" value={props.lastName} onChange={handleInputChange}  className="input-group__user-name_last"placeholder="Last Name" />
        </section>
        <input name="email" type="email" value={props.email} onChange={handleInputChange}  className="input-group__email" placeholder="Email"/>
        <section className="input-group__date-picker">
            <HiredDatePicker
                props={props}
                handleInputDateChange={handleInputDateChange}
            />
        </section>
            <Buttons.SuccessButton
                buttonTitle="Edit"
                handleButtonClick={handleButtonClick}
            />
    </section>
);
export default UserEditInputGroup;