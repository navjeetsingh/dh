import React from 'react';
import {AuthenticationContainer} from './AuthenticationPage.styles.js';
import SignIn from '../../components/SignIn/SignIn.component.js'
import SignUp from '../../components/SignUp/SignUp.component.js'

const AuthenticationPage = () => (
  <AuthenticationContainer>
    <SignIn />
    <SignUp />
  </AuthenticationContainer>
)

export default AuthenticationPage;