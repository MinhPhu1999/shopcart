import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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

import useStyles from '../../components/Config/Account/useStyles';

export default function Reset({ disable, handleChangeEmail, submitHandler }) {
	const classes = useStyles();
	// const [disable, setDisable] = useState(true);

	// const handleChangeEmail = e => {
	// 	e.target.value ? setDisable(false) : setDisable(true);
	// };

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOpenOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Reset Password
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={submitHandler}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								name="email"
								label="Email Address"
								autoComplete="email"
								onInput={e => handleChangeEmail(e)}
							/>
						</Grid>
					</Grid>
					<Button
						disabled={disable}
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Continue
					</Button>
				</form>
			</div>
		</Container>
	);
}
