import {
	Backdrop,
	CircularProgress,
	Fade,
	makeStyles,
	Modal,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	madal: {
		color: theme.palette.common.white,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

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

export default LoadingBackdrop;
