import React from 'react';
import SignIn from '../../components/SignIn/SignIn.component.js'
import SignUp from '../../components/SignUp/SignUp.component.js'
import './AuthenticationPage.styles.scss';

const AuthenticationPage = () => (
  <div className="Authentication">
    <SignIn />
    <SignUp />
  </div>
)

export default AuthenticationPage;