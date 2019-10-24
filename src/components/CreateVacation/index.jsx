import React, { Component} from "react";
import { VacationInputGroup } from "../Inputs";
import "./create_vacation.scss";

class CreateVacation extends Component {
    state= {
        userId:'',
        startDate: new Date(),
        endDate: new Date(),
        description: ''
    }
    setUserId = ()=>{
        const userId = localStorage.getItem("id");
        this.setState({
            userId: userId
        });
    }
    handlerStartDate = (date)=> {
        this.setState({
            startDate: date
        });
    }
    handlerEndDate = (date)=> {
        this.setState({
            endDate: date
        });
    }
    handlerDescription = ({target:{value}})=> {
        this.setState({
            description: value
        });
    }

    render () {
        const {startDate, endDate, description} = this.state;
        return(
            <section className="vacation-create">
                <section className="container">
                    <VacationInputGroup
                        startDate={startDate}
                        endDate={endDate}
                        handlerEndDate={this.handlerEndDate}
                        handlerStartDate={this.handlerStartDate}
                        description={description}
                        handlerDescription={this.handlerDescription}
                    />
                </section>
            </section>
        )
    }
}

export default CreateVacation;