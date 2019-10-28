import React from 'react';
import VacationItem from './vacationItem';

const VacationList = ({vacations})=>(
    <section className="vacations">
        {vacations.map((vacation)=>(<VacationItem key={vacation._id} vacation={vacation}/>))}
    </section>
);
export default VacationList;