import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import store from './redux/store';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
			<ToastContainer autoClose={1500} />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root'),
);

reportWebVitals();
