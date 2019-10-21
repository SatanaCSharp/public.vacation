import React, { Component } from 'react';
import { Buttons, Inputs } from '..';
import { Link } from "react-router-dom";
import LoaderBlock from "../LoaderBlock";
import config from '../../config';
import axios from  'axios';
import "./sign_in.scss";
class SignInPage extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false,
        errors: [],
        loadStateClass: "loader-hidden",
        buttonDisabledClass: 'btn-disabled'
    };
    handleEmailInputChange = ({target: {value } }) => {
        this.setState({
            email: value
        });
    };
    handlePasswordInputChange = ({target: {value } }) => {
        this.setState({
            password: value
        });
    };
    handleRememberMeCheckboxChange = ({target: {checked}}) => {
        this.setState({ rememberMe: checked });
        if(checked && this.state.email && this.state.password ) {
            localStorage.setItem("signInEmail", this.state.email);
            localStorage.setItem("signInPassword", this.state.password);
        } else {
            localStorage.removeItem("signInEmail");
            localStorage.removeItem("signInPassword");
        }
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
          const {email, password} = this.state;
          axios.post(`${config.apiUrl}/auth/sign_in`, {email, password}).then(({ data: { user }})=>{
              localStorage.setItem("token", user.token);
              localStorage.setItem("id", user._id);
              this.hideLoader();
          });
    };

    render () {
        const {email, password, rememberMe, loadStateClass, buttonDisabledClass} = this.state;

        return (
            <section className="sign-in-page content">
                <LoaderBlock
                    loadStateClass= {loadStateClass}
                />
                <section className="container">
                        <h3 className="sign-in-page__title">Sign In</h3>
                        <img className="sign-in-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
                        <section className="errors">

                        </section>
                        <Inputs.SignInInputGroup
                            email = { email }
                            password = { password }
                            rememberMe = { rememberMe }
                            handleEmailInputChange = {this.handleEmailInputChange}
                            handlePasswordInputChange = {this.handlePasswordInputChange}
                            handleRememberMeCheckboxChange = {this.handleRememberMeCheckboxChange}
                        />
                        <div className="sign-up-page__button">
                            <Buttons.SuccessButton
                                buttonTitle="Sign In"
                                handleButtonClick={this.handleButtonClick}
                                buttonDisabledClass={buttonDisabledClass}
                            />
                        </div>
                        <section className="links">
                            <ul className="links-list">
                                {/*<li className="links-list__link-item"><Link to="/forgot_password"> Forgot password?</Link></li>*/}
                                <li className="links-list__link-item"><Link to="/sign_up"> Don`t have an account?</Link></li>
                            </ul>
                        </section>
                </section>
            </section>
        )
    }
}
export default SignInPage;
