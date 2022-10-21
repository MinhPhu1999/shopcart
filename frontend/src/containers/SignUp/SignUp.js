import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
import { toast } from 'react-toastify';
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Grid,
	Typography,
	Container,
} from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import isEmpty from 'lodash/isEmpty';
// Components
import MessageBox from 'components/MessageBox/MessageBox';
import useStyles from 'config/useStyles';

// Actions
import { register } from 'redux/actions/userActions';

export default function SignUp(props) {
	const classes = useStyles();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');

	const { error, message } = useSelector(state => state.userRegister);
	console.log('message', message);
	const { userInfo } = useSelector(state => state.userLogin);

	const dispatch = useDispatch();

	if (!isEmpty(userInfo)) {
		props.history.push('/');
	}

	const handlePhoneChange = value => {
		if (value) {
			setPhone(value);
		}
	};

	const isValidEmail = email => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const submitHandler = e => {
		e.preventDefault();
		if (firstName.trim().length < 2 || lastName.trim().length < 2) {
			toast.error('Firstname and Lastname must be at least 2 characters');
		} else if (email.trim().length < 6 || !isValidEmail(email)) {
			toast.error('Email wrong');
		} else if (password.trim().length < 6) {
			toast.error('password must be at least 6 characters');
		} else {
			dispatch(register(firstName, lastName, phone, email, password));
		}
	};

	useEffect(() => {
		if (error) {
			toast.error(error);
		}
	}, [error]);

	useEffect(() => {
		if (message) {
			toast.success(message);
			// setTimeout(() => {
			// 	props.history.push('/signin');
			// }, 100);
		}
	}, [message]);

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOpenOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={submitHandler}
				>
					{/* {error && <MessageBox variant="danger">{error}</MessageBox>} */}
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required="true"
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								onChange={e => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								onChange={e => setLastName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<MuiPhoneNumber
								defaultCountry="vn"
								regions="asia"
								variant="outlined"
								fullWidth
								label="Phone Number"
								name="phone"
								autoComplete="phone"
								value={phone}
								onChange={handlePhoneChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={e => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current password"
								onChange={e => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link
								to="/signin"
								variant="body2"
								className={classes.link}
							>
								{'Already have an account? Sign In'}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
