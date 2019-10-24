import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./inputs.scss";
const StartDatePicker = ({startDate,  handlerStartDate}) =>(
    <DatePicker
        selected= {startDate}
        selectsStart
        minDate={new Date()}
        onChange={handlerStartDate}
        placeholderText="StartDate"
        calendarClassName = "input-date-picker"
    />
);
const EndDatePicker = ({startDate, endDate, handlerEndDate }) => (
    <DatePicker
        selected= {endDate}
        endDate
        minDate={startDate}
        onChange={handlerEndDate}
        placeholderText="End Date"
        calendarClassName = "input-date-picker"
    />
);
const VacationInputGroup = ({
    startDate,
    endDate,
    description,
    handlerStartDate,
    handlerEndDate,
    handlerDescription,
}) =>(
    <section className="input-group">
        <section className="input-group__date-picker">
            <StartDatePicker
                startDate={startDate}
                handlerStartDate={handlerStartDate}
            />
            <EndDatePicker
                startDate={startDate}
                endDate={endDate}
                handlerEndDate={handlerEndDate}
            />
        </section>
        <textarea  value={description} onChange={handlerDescription}  className="input-group__description" placeholder="Description"/>
    </section>
);
export default VacationInputGroup;