import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component.js';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage.component.js';
import HomePage from './pages/HomePage/HomePage.component.js';
import ShopPage from './pages/ShopPage/ShopPage.component.js';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component.js';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import './App.css';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
	
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
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
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);
