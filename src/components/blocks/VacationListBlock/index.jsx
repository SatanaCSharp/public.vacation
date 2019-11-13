import React from 'react';
import { Buttons } from "../../" ;
import VacationList from './vacationList';
import "./vacation_list_block.scss";
const VacationListBlock = ({vacations}) => (
    <section className="vacation-list">
        <section className="vacation-link">
            <Buttons.DefaultButton title="Add Vacation" to={"/vacation/create"}/>
        </section>
        <VacationList vacations={vacations}/>
    </section>
);

export default VacationListBlock;