import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.component.js';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage.component.js';
import HomePage from './pages/HomePage/HomePage.component.js';
import ShopPage from './pages/ShopPage/ShopPage.component.js';
import { auth } from './firebase/firebase.utils.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			this.setState({
				currentUser: user
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path="/" component={() => <HomePage />} />
					<Route path="/shop" component={() => <ShopPage />} />
					<Route path="/sign-in" component={() => <AuthenticationPage />} />
				</Switch>
			</div>
		);
	}
}

export default App;
