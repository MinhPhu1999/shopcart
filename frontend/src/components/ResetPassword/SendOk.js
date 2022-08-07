import React, { useEffect, useState, memo } from 'react';
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { LockOpenOutlined } from '@material-ui/icons';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import useStyles from 'config/useStyles';

function SendOk({ email }) {
	const classes = useStyles();
	const [disable, setDisable] = useState(true);

	const handleChangeEmail = e => {
		e.target.value ? setDisable(false) : setDisable(true);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Card className={classes.card}>
					<div className={classes.wrapperAvatar}>
						<Avatar className={classes.sendOk}>
							<ContactMailIcon />
						</Avatar>
						<Typography component="h1" variant="h4">
							Send Ok
						</Typography>
					</div>
					<CardContent className={classes.cardContent}>
						<Typography
							className={classes.title}
							color="textSecondary"
						>
							Verification code has been sent to address
						</Typography>
						<Typography className={classes.email}>
							{email}
						</Typography>
						<Typography
							className={classes.title}
							color="textSecondary"
						>
							Please Verify.
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							href="/"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Ok
						</Button>
					</CardActions>
				</Card>
			</div>
		</Container>
	);
}

export default memo(SendOk);
