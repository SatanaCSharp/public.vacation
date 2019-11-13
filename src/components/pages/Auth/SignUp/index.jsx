import React, { Component } from 'react';
import { connect } from "react-redux";
import { Buttons, Inputs } from '../../../';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import store from "../../../../store";
import 'react-toastify/dist/ReactToastify.css';
import * as validationService from "../../../../services/validationService";
import "./sign_up.scss";
import { signUpRequest } from '../../../../services/requestService';
import { setUser } from "../../../../actions/userActionCreator";
const SignUpBlock = ({userProp, handleInputChange, handleButtonClick})=>(
    <section className="sign-up-page content">
        <ToastContainer />
    <section className="container">
            <h3 className="sign-up-page__title">Sign Up</h3>
            <img className="sign-up-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
            <Inputs.SignUpInputGroup
                userProp={userProp}
                handleInputChange = { handleInputChange }
            />
            <div className="sign-up-page__button">
                <Buttons.SuccessButton buttonTitle="Sign Up" handleButtonClick={handleButtonClick}/>
            </div>
            <section className="links">
                <ul className="links-list">
                    <li className="links-list__link-item"><Link to="/sign_in"> Already have an account?</Link></li>
                </ul>
            </section>
    </section>
</section>
);
class SignUpPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: []
    };
    handleInputChange = ({ target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    setErrors = (errors) => {
        this.setState({
            errors: errors
        })
    }
    getErrorsValidatedForm = ()=> {
        const {firstName, lastName, email, password, passwordConfirmation} = this.state;
        const validationErrors =  [
            validationService.validateNameField(firstName, "First name"),
            validationService.validateNameField(lastName, "Last name"),
            validationService.validateEmailField(email),
            validationService.validatePassword(password),
            validationService.validatePasswordConfirmation(password, passwordConfirmation),
        ].filter((err)=> err !== undefined);
        this.setErrors(validationErrors);
        return validationErrors.length ? validationErrors : null;
    }
    showErrors = (errors) => {
        errors.forEach((err)=>{
            toast.error(err, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
              });
        });
    }
    handleButtonClick = () => {
        const errors = this.getErrorsValidatedForm();
        if(errors) {
            this.showErrors(errors);
            console.log("Errors: ", errors);
        } else {
            const {firstName, lastName, email, password, passwordConfirmation} = this.state;
            const user = signUpRequest({firstName, lastName, email, password, passwordConfirmation});
            store.dispatch(setUser(user._id, user.token));
        }
    };
    render () {
        const userProp  = this.state;
        return (
                <SignUpBlock
                    userProp={userProp}
                    handleInputChange={this.handleInputChange}
                    handleButtonClick={this.handleButtonClick}
                />
        );
    }
}
const mapStateToProps = state => ({
    user: state.user
});
export default  connect(mapStateToProps)(SignUpPage);
