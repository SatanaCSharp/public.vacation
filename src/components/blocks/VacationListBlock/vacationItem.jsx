import React from 'react';
import VacationButtons from './vacationButtons';
const VacationItem = ({vacation}) => (
    <section className="vacations__card" key={vacation._id}>
        <section className="date">
            <span className="date__start-date">
                <span className="title">Start date: </span>
                <span className="value"> {vacation.startDate} </span>

            </span>
            <span className="date__end-date">
                <span className="title">End date: </span>
                <span className="value"> {vacation.endDate} </span>
            </span>
        </section>
        <span className="description">{vacation.description}</span>
        <VacationButtons _id={vacation._id}/>
    </section>
);
export default VacationItem;