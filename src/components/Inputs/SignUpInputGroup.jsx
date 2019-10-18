import React from 'react';

import './inputs.scss'
const SignUpInputGroup = () => (
    <section className="input-group">
        <section className= "input-group__user-name">
            <input type="text" name="firstName"  className="input-group__user-name_first"placeholder="First Name" autoFocus/>
            <input type="text" name="lastName" className="input-group__user-name_last"placeholder="Last Name" />
        </section>
        <input type="email" name="email" className="input-group__email" placeholder="Email"/>
        <section className="input-group__passwords">
            <input type="password" name="password"  className="input-group__passwords_password" placeholder="Password"/>
            <input type="password"  name="passwordConfirmation"className="input-group__passwords_password-confirmation" placeholder="Password Confirmation" />
        </section>
    </section>
);
export default SignUpInputGroup;