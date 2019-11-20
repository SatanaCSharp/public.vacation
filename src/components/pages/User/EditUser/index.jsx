import React, { Component} from "react";
import axios from "axios";
import config from "../../../../config";
import { connect } from "react-redux";
import { Inputs, Buttons } from "../../..";
import { getUserData } from "../../../../services/localStorageService";
import { userPending } from "../../../../actions/userActionCreator";

class EditUser extends Component {
    state = {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '',
    }
    initUserState(user) {
        const {_id, firstName, lastName, email, hiredDate } = user;
        this.setState({
            userId: _id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            hiredDate: new Date(hiredDate),
        });
    }
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    handleInputDateChange=(date)=>{
        this.setState({
            hiredDate: date
        })
    }
    handleButtonClick = () => {
        const token = localStorage.getItem("token");
        const {userId, firstName, lastName, email, hiredDate} = this.state;
        axios.put(`${config.apiUrl}/users/${userId}`,{
            firstName, lastName, email, hiredDate
        },
        {
            headers:{"Authorization": token}
        });
    }
    componentDidMount() {
        if(!Object.keys(this.props.user).length) {
            const userData = getUserData();
            this.props.dispatch(userPending(userData));
        }
        if(Object.keys(this.props.user).length) {
            this.initUserState(this.props.user);
            console.log("Reload User: ", this.props);
        }
    }
    render () {
        const props = this.state;
        return(
            <section className="user-edit">
                <section className="container">
                    <Buttons.BackButton title={"Go Back"} to={"/cabinet"} />
                    <Inputs.EditUserInputGroup
                        props={props}
                        handleInputChange={this.handleInputChange}
                        handleButtonClick={this.handleButtonClick}
                        handleInputDateChange={this.handleInputDateChange}
                    />
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) =>({
    user: state.user
});
export default connect(mapStateToProps)(EditUser);