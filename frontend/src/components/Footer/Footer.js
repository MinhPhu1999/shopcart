import { AppBar, Container, Toolbar } from '@material-ui/core';

import Copyright from '../Config/Copyright/Copyright';
import useStyles from '../Config/Account/useStyles';

export default function Footer() {
	const classes = useStyles();

	return (
		<AppBar className={classes.footer}>
			<Container maxWidth="xs" className={classes.footer__wrapper}>
				<Toolbar>
					<Copyright />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
