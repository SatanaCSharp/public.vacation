import React, { Component } from 'react';
import UserInfoBlock from "../UserInfoBlock";
import VacationTableBlock from "../VacationTableBlock";
import "./cabinet.scss";
class Cabinet extends Component {
    state = {
    }

    getVacations = ()=> {
        return [
            {
                _id: "1",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "2",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "3",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "4",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "5",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "6",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
            {
                _id: "7",
                startDate: "2019-10-23",
                endDate: "2019-10-24",
                description: "Lorem impsum dolor set amet"
            },
        ]
    }
    render() {
        const vacations = this.getVacations();
        return (
            <section className="cabinet">
                <section className="container">
                    <UserInfoBlock
                        firstName="Jon"
                        lastName="Doe"
                        email="jon.doe@gm.com"
                        hiredDate="2019-10-23"
                        balance={21}
                    />
                    <VacationTableBlock vacations={vacations}/>
                </section>
            </section>
        )
    }
}

export default Cabinet;