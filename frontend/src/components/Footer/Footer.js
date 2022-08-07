import { memo } from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';

import Copyright from '../Copyright/Copyright';
import useStyles from 'config/useStyles';

function Footer() {
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

export default memo(Footer);
