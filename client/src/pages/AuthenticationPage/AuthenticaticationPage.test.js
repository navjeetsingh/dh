import React from 'react';
import { shallow } from 'enzyme';
import AuthenticationPage from './AuthenticationPage.component';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<AuthenticationPage />)).toMatchSnapshot();
});