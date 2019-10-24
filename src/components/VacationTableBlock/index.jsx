import React from 'react';
import { Link } from "react-router-dom";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";
import "./vacation_table.scss";
const VacationActions = ({_id}) =>(
    <section className="actions">
        <Link className="actions__link actions__details" to={"/"+_id}>
            <FaInfo size={18} color={"#17a2b8"} />
        </Link>
        <Link className="actions__link actions__edit" to={"/vacation/edit/"+_id}>
             <FiEdit2 size={18} color={"#57bea5"} />
        </Link>
        <Link className="actions__link actions__delete" to={"/"+_id}>
            <FiTrash size={18} color={"#dc3545"} />
        </Link>
    </section>
)
const VacationRow = ({vacation}) => (
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
        <VacationActions _id={vacation._id}/>
    </section>
);
const VacationTableBody = ({vacations})=>(
    <section className="vacations">
        {vacations.map((vacation)=>(<VacationRow key={vacation._id} vacation={vacation}/>))}
    </section>
);
const VacationTableBlock = ({vacations}) => (
    <section className="vacation-list">
        <section className="vacation-link">
            <Link className="vacation-link__add" to={"/vacation/create"}>Add Vacation</Link>
        </section>
        <VacationTableBody vacations={vacations}/>
    </section>
);

export default VacationTableBlock;