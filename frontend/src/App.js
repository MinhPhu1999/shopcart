import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './screens/Home/HomeScreen';
import ProductScreen from './screens/Product/ProductScreen';
import CartScreen from './screens/Cart/CartScreen';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

//Components
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Footer from './components/Footer/Footer';

//Private
import PrivateRoute from './components/Config/Private/PrivateRoute';

function App() {
	const [sideToggle, setSideToggle] = useState(false);

	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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
					<Route exact path="/cart" component={CartScreen} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
