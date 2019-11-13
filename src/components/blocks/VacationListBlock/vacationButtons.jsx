import React from 'react';
import { Buttons } from "../../";
const VacationButtons = ({_id}) =>(
    <section className="buttons">
        <Buttons.InfoCircleButton  to={"/"+_id}/>
        <Buttons.EditCircleButton  to={"/vacation/edit/"+_id}/>
        <Buttons.DeleteCircleButton  to={"/"+_id}/>
    </section>
);
export default VacationButtons;