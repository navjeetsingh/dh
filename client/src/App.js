import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { GlobalStyles } from './global.styles';
import Header from './components/Header/Header.component.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/Spinner/Spinner.component.js'

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component.js'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage.component.js'));
const AuthenticationPage = lazy(() =>
	import('./pages/AuthenticationPage/AuthenticationPage.component.js')
);
const CheckoutPage = lazy(() =>
	import('./pages/CheckoutPage/CheckoutPage.component.js')
);

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyles />
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
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
				</Suspense>
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
