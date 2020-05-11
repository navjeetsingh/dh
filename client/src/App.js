import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component.js';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage.component.js';
import HomePage from './pages/HomePage/HomePage.component.js';
import ShopPage from './pages/ShopPage/ShopPage.component.js';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyles } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyles />
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/sign-in"
					render={() =>
						currentUser ? <Redirect to="/" /> : <AuthenticationPage />
					}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
