import React from 'react';

import './inputs.scss'
const SignInInputGroup = () => (
    <section className="input-group">
        <input type="email" name="email" className="input-group__email" placeholder="Email"/>
        <input type="password" name="password"  className="input-group__password" placeholder="Password"/>
        <input type="checkbox" name="rememberMe" id="remember-me" className="remember-me"/>
        <label htmlFor="remember-me">Remember me</label>
    </section>
);
export default SignInInputGroup;