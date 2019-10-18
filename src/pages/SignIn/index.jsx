import React, { Component } from 'react';
import { Buttons, Inputs } from '../../components';
import "./sign_in.scss";
class SignUpPage extends Component {
    render () {
        return (
            <section className="sign-in-page content">
                <section className="container">
                        <h3 className="sign-in-page__title">Sign In</h3>
                        <img className="sign-in-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
                        <Inputs.SignInInputGroup/>
                        <div className="sign-up-page__button">
                            <Buttons.SuccessButton buttonTitle="Sign In"/>
                        </div>
                        <section className="links">
                            <ul className="links-list">
                                <li className="links-list__link-item"><a href="#"> Forgot password?</a></li>
                                <li className="links-list__link-item"><a href="#"> Don`t have an account?</a></li>
                            </ul>
                        </section>
                </section>
            </section>
        )
    }
}
export default SignUpPage;