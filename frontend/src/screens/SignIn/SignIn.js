import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Avatar,
	Button,
	TextField,
	FormControlLabel,
	Grid,
	Checkbox,
	Typography,
	Container,
	CssBaseline,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { toast } from 'react-toastify';

import MessageBox from '../../components/Config/MessageBox/MessageBox';
import useStyles from '../../components/Config/Account/useStyles';
import { login } from '../../redux/actions/userActions';

const SignIn = props => {
	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const userLogin = useSelector(state => state.userLogin);
	const { loading, userInfo, error } = userLogin;
	const dispatch = useDispatch();

	const redirect = props.location.serach
		? props.location.serach.spit('=')[1]
		: '/';

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
			toast.success('Login is successfully');
		}
		return () => {};
	}, [props.history, redirect, userInfo]);

	const submitHandler = e => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>

				<form
					className={classes.form}
					noValidate
					onSubmit={submitHandler}
				>
					{error && <MessageBox variant="danger">{error}</MessageBox>}
					<TextField
						variant="outlined"
						margin="nomal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={e => setEmail(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={e => setPassword(e.target.value)}
					/>

					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>

					<Grid container>
						<Grid item xs>
							<Link
								to='/'
								variant="body2"
								className={classes.link}
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link
								to={
									redirect === '/'
										? 'signup'
										: 'signup?redirect=' + redirect
								}
								variant="body2"
								className={classes.link}
							>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignIn;
