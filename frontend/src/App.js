import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from 'containers/Home/HomeScreen';
import ProductScreen from 'containers/Product/ProductScreen';
import CartScreen from 'containers/Cart/CartScreen';
import SignIn from 'containers/SignIn/SignIn';
import SignUp from 'containers/SignUp/SignUp';
import ResetScreen from 'containers/ResetScreen/ResetScreen';
import Profile from 'containers/Profile/Profile';

//Components
import Navbar from 'components/Navbar/Navbar';
import Backdrop from 'components/Backdrop/Backdrop';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import Footer from 'components/Footer/Footer';
import NotFound from 'components/NotFound/NotFound';

// Private Route
import PrivateRoute from 'config/Private/PrivateRoute';

import './App.css';

function App() {
	const [sideToggle, setSideToggle] = useState(false);

	const toggle = value => () => {
		setSideToggle(value);
	};

	return (
		<Router>
			<Navbar click={toggle(true)} />
			{sideToggle && (
				<SideDrawer show={sideToggle} click={toggle(false)} />
			)}
			<Backdrop show={sideToggle} click={toggle(false)} />
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route
						exact
						path="/product/:id"
						component={ProductScreen}
					/>
					<PrivateRoute exact path="/cart" component={CartScreen} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<Route exact path="/reset" component={ResetScreen} />
					<Route path="*" exact component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
