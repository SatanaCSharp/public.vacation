import React, { Component} from "react";
import { Inputs } from "../../..";
import LoaderBlock from '../../../hoc/LoadingHOC';
import axios from "axios";
import config from "../../../../config";

class EditUser extends Component {
    state = {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '',
        loadStateClass: "loader-hidden"
    }
    handleFirstNameInputChange = ({target: { value } }) => {
        this.setState({
            firstName: value
        });
    };
    handleLastNameInputChange = ({target: { value } }) => {
        this.setState({
            lastName: value
        });
    };
    handleEmailInputChange = ({target: { value } }) => {
        this.setState({
            email: value
        });
    };
    handleEmailInputChange = ({target: { value } }) => {
        this.setState({
            email: value
        });
    };
    handlerHiredDate = (date) => {
        this.setState({
            hiredDate: date
        });
    };
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
    handleButtonClick = () => {
        this.showLoader();
        const token = localStorage.getItem("token");
        const {userId, firstName, lastName, email, hiredDate} = this.state;
        axios.put(`${config.apiUrl}/users/${userId}`,{
            firstName, lastName, email, hiredDate
        },
        {
            headers:{"Authorization": token}
        }).then((data)=>{
            this.hideLoader();
        });
    }
    fetchUser = (userId, token)=> {
        axios.get(`${config.apiUrl}/users/${userId}`,{
            headers:{"Authorization": token}
        }).then(({data})=>{
            const hiredDate = new Date(data.hiredDate);
            this.setState({
                ...data,
                hiredDate,
                userId: data._id
            });
            this.hideLoader();
        });
    }

    componentDidMount() {
        this.showLoader();
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("id");
        this.fetchUser(userId, token);
    }
    render () {

        const {firstName, lastName, email, hiredDate, loadStateClass} = this.state;
        return(
            <section className="user-edit">
                  <LoaderBlock
                    loadStateClass= {loadStateClass}
                />
                <section className="container">
                    <Inputs.EditUserInputGroup
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        hiredDate={hiredDate}
                        handleLastNameInputChange={this.handleLastNameInputChange}
                        handleFirstNameInputChange={this.handleFirstNameInputChange}
                        handleEmailInputChange={this.handleEmailInputChange}
                        handlerHiredDate={this.handlerHiredDate}
                        handleButtonClick={this.handleButtonClick}
                    />
                </section>
            </section>
        )
    }
}
export default EditUser;