import { memo } from 'react';
import { Backdrop, CircularProgress, Fade, Modal } from '@material-ui/core';

import useStyles from 'config/useStyles';

const LoadingBackdrop = props => {
	const classes = useStyles();

	return (
		<Modal
			className={classes.madal}
			open={props.open}
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 250,
			}}
		>
			<Fade in={props.open}>
				<CircularProgress color="inherit" />
			</Fade>
		</Modal>
	);
};

export default memo(LoadingBackdrop);
