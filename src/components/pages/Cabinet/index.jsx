import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfoBlock from "../UserInfoBlock";
import VacationListBlock from "../Vacation/VacationListBlock";
import LoaderBlock from '../../hoc/LoadingHOC';
import axios from 'axios';
import config from "../../../config";
import "./cabinet.scss";
class Cabinet extends Component {
    state = {
        userId: '',
        firstName: '',
        lastName:"",
        email:"",
        hiredDate:"",
        balance:"",
        vacations:[],
        loadStateClass: "loader-hidden"
    }
    showLoader = () => {
        this.setState({
            loadStateClass: "loader-show"
        });
    };
    hideLoader = () => {
        this.setState({
            loadStateClass: "loader-hidden"
        });
    };
    fetchVacationBalance = (userId, token) =>{
        axios.get(`${config.apiUrl}/vacations/users/${userId}/balance`,{
            headers:{"Authorization": token}
        }).then(({data})=>{
            console.log("Balance:", data);
            this.setState({
                balance: data.amount
            });
        });
    }
    fetchUser = (userId, token)=> {
        axios.get(`${config.apiUrl}/users/${userId}`,{
            headers:{"Authorization": token}
        }).then(({data})=>{
            const hiredDate = data.hiredDate.substring(0,10);
            this.setState({
                ...data,
                hiredDate,
                userId: data._id
            });
        });
    }
    fetchVacations = (userId,token) => {
        axios.get(`${config.apiUrl}/users/${userId}/vacations`,{
            headers:{"Authorization": token}
        }).then(({data})=>{
            this.setState({
                vacations: data
            });
            this.hideLoader();
        });
    }
    componentDidMount() {
        this.showLoader();
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        this.fetchVacationBalance(userId, token);
        this.fetchUser(userId, token);
        this.fetchVacations(userId, token);
    }
    render() {
        const {
            userId,
            firstName,
            lastName,
            email,
            hiredDate,
            balance,
            loadStateClass,
        } = this.state;
        const { vacations } = this.props;
        return (
            <section className="cabinet">
                  <LoaderBlock
                    loadStateClass= {loadStateClass}
                />
                <section className="container">
                    <UserInfoBlock
                        userId={userId}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        hiredDate={hiredDate}
                        balance={balance}
                    />
                    <VacationListBlock vacations={vacations}/>
                </section>
            </section>
        )
    }
}

export default connect(state=>({
    vacations: state.vacations,
}))(Cabinet);