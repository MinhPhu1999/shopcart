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

import Reset from '../../components/ResetPassword/Reset';
import SendOk from '../../components/ResetPassword/SendOk';

import useStyles from '../../components/Config/Account/useStyles';

export default function ResetScreen() {
	const classes = useStyles();
	const [disable, setDisable] = useState(true);
	const [send, setSend] = useState(false);
	const [email, setEmail] = useState('');

	const handleChangeEmail = e => {
		if (e.target.value) {
			setDisable(false);
			setEmail(e.target.value);
		} else {
			setDisable(true);
		}
	};

	const submitHandler = e => {
		e.preventDefault();
		setSend(true);
	};

	return send ? (
		<SendOk email={email}/>
	) : (
		<Reset
			disable={disable}
			handleChangeEmail={handleChangeEmail}
			submitHandler={submitHandler}
		/>
	);
}
