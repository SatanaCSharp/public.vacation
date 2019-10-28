import React, { Component } from 'react';
import { Buttons, Inputs } from '../..';
import { Link } from "react-router-dom";
import LoaderBlock from "../../blocks/LoaderBlock";
import axios from "axios";
import config from "../../../config";
import "./sign_up.scss";
class SignUpPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        loadStateClass: "loader-hidden"
    };
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
    handlePasswordInputChange = ({target: { value } }) => {
        this.setState({
            password: value
        });
    };
    handlePasswordConfirmationInputChange = ({target: { value } }) => {
        this.setState({
            passwordConfirmation: value
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
        const { firstName, lastName, email, password,passwordConfirmation } = this.state;
        axios.post(`${config.apiUrl}/auth/sign_up`, { firstName, lastName, email, password, passwordConfirmation })
            .then(({ data: { user } }) => {
                localStorage.setItem("token", user.token);
                localStorage.setItem("id", user._id);
                this.hideLoader();
            });
    };
    render () {
        const { firstName, lastName, email, password,passwordConfirmation,loadStateClass } = this.state;
        return (
            <section className="sign-up-page content">
                <LoaderBlock
                    loadStateClass= {loadStateClass}
                />
                <section className="container">
                        <h3 className="sign-up-page__title">Sign Up</h3>
                        <img className="sign-up-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
                        <Inputs.SignUpInputGroup
                            firstName= { firstName }
                            lastName= { lastName }
                            email= { email }
                            password= { password }
                            passwordConfirmation= { passwordConfirmation }
                            handleFirstNameInputChange = { this.handleFirstNameInputChange }
                            handleLastNameInputChange ={ this.handleLastNameInputChange }
                            handleEmailInputChange ={ this.handleEmailInputChange }
                            handlePasswordInputChange ={ this.handlePasswordInputChange }
                            handlePasswordConfirmationInputChange ={ this.handlePasswordConfirmationInputChange }

                        />
                        <div className="sign-up-page__button">
                            <Buttons.SuccessButton buttonTitle="Sign Up" handleButtonClick={this.handleButtonClick}/>
                        </div>
                        <section className="links">
                            <ul className="links-list">
                                <li className="links-list__link-item"><Link to="/sign_in"> Already have an account?</Link></li>
                            </ul>
                        </section>
                </section>
            </section>
        );
    }
}
export default SignUpPage;
