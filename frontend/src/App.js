import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from 'containers/Home/HomeScreen';
import ProductScreen from 'containers/Product/ProductScreen';
import CartScreen from 'containers/Cart/CartScreen';
import SignIn from 'containers/SignIn/SignIn';
import SignUp from 'containers/SignUp/SignUp';
import ResetScreen from 'containers/ResetScreen/ResetScreen';

//Components
import Navbar from 'components/Navbar/Navbar';
import Backdrop from 'components/Backdrop/Backdrop';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import Footer from 'components/Footer/Footer';
import NotFound from 'components/NotFound/NotFound';

import './App.css';

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
					<Route exact path="/reset" component={ResetScreen} />
					<Route path="*" exact component={NotFound} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
