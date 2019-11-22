import React, { Component } from 'react';
import { Buttons, Inputs } from '../../../';
import { Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { signUpRequest } from "../../../../services/requestService";
import { setUserData }  from "../../../../services/localStorageService";
import { SIGH_UP_FORM_ERRORS } from '../../../../constants/errorTypes';
import ErrorsService from '../../../../services/ErorrsService';
import "./sign_up.scss";
import 'react-toastify/dist/ReactToastify.css';

const SignUpBlock = ({props, handleInputChange, handleButtonClick})=>(
        <section className="sign-up-page content">
            <ToastContainer />
        <section className="container">
                <h3 className="sign-up-page__title">Sign Up</h3>
                <img className="sign-up-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
                <Inputs.SignUpInputGroup
                    userProp={props}
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
        errors: [],
        redirect: false
    };
    handleInputChange = ({ target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };

    handleButtonClick = () => {
        const errorsService = new ErrorsService();
        const {firstName, lastName, email, password, passwordConfirmation} = this.state;
        errorsService.setFormErrorsIfExists(SIGH_UP_FORM_ERRORS, {firstName, lastName, email, password, passwordConfirmation});
        if(errorsService.isEmpty) {
            errorsService.showErrors();
        } else {
            signUpRequest({firstName, lastName, email, password, passwordConfirmation})
            .then((user) => {
                setUserData(user._id, user.token)
            }).then(()=>{
                this.props.history.push("/cabinet");
            });
        }
    };
    render () {
        const props  = this.state;
        return (
                <SignUpBlock
                    props={props}
                    handleInputChange={this.handleInputChange}
                    handleButtonClick={this.handleButtonClick}
                />
        );
    }
}

export default  SignUpPage;
