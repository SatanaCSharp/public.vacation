import React from 'react';

import './inputs.scss'
const SignInInputGroup = () => {
    return (
        <section className="input-group">
            <input type="email" name="email" className="input-group__email" placeholder="Email"/>
            <input type="password" name="password"  className="input-group__passwords_password" placeholder="Password"/>
        </section>
    )
}
export default SignInInputGroup;