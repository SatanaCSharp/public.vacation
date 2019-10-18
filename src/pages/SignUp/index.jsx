import React, { Component } from 'react';
import { Buttons, Inputs } from '../../components';
import "./sign_up.scss";
class SignUpPage extends Component {
    render () {
       return <section className="sign-up-page content">
            <section className="container">
                    <h3 className="sign-up-page__title">Sign Up</h3>
                    <img className="sign-up-page__user-photo" src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png" alt=""/>
                    <Inputs.SignUpInputGroup/>
                    <div className="sign-up-page__button">
                        <Buttons.SuccessButton buttonTitle="Sign Up"/>
                    </div>
                    <section className="links">
                        <ul className="links-list">
                            <li className="links-list__link-item"><a href="#"> Already have an account?</a></li>
                        </ul>
                    </section>
            </section>
        </section>
    }
}
export default SignUpPage;