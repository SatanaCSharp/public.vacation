import React from 'react';
import './inputs.scss'
const SignUpInputGroup = ({
     firstName,
     lastName,
     email,
     password,
     passwordConfirmation,
     handleFirstNameInputChange,
     handleLastNameInputChange,
     handleEmailInputChange,
     handlePasswordInputChange,
     handlePasswordConfirmationInputChange
}) => (
    <section className="input-group">
        <section className= "input-group__user-name">
            <input type="text" value={firstName} onChange={handleFirstNameInputChange}  className="input-group__user-name_first"placeholder="First Name" autoFocus/>
            <input type="text" value={lastName} onChange={handleLastNameInputChange}  className="input-group__user-name_last"placeholder="Last Name" />
        </section>
        <input type="email" value={email} onChange={handleEmailInputChange}  className="input-group__email" placeholder="Email"/>
        <section className="input-group__passwords">
            <input type="password" value={password} onChange={handlePasswordInputChange}  className="input-group__passwords_password" placeholder="Password"/>
            <input type="password" value={passwordConfirmation} onChange={handlePasswordConfirmationInputChange} className="input-group__passwords_password-confirmation" placeholder="Password Confirmation" />
        </section>
    </section>
);
export default SignUpInputGroup;
