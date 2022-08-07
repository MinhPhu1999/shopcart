import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../Account/useStyles';

export default function Copyright() {
	const classes = useStyles();
	return (
		<Typography variant="body1" color="common.white" align="center">
			{'Copyright © '}
			<Link to="/" className={classes.link}>
				ShopCart
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
