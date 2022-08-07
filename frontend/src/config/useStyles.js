import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	wrapperAvatar: {
		textAlign: 'center',
	},
	sendOk: {
		margin: '8px 43%',
		backgroundColor: theme.palette.secondary.main,
	},
	card: {
		width: '100%',
	},
	cardContent: {
		textAlign: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	title: {
		fontSize: '18px',
	},
	email: {
		fontSize: '18px',
		color: '#3f51b5',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		borderRadius: theme.spacing(3),
	},
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
		// color: 'white',
	},
	footer: {
		marginTop: '3rem',
		position: 'static',
		bottom: 0,
	},
	footer__wrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
	modal: {
		color: theme.palette.common.white,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

export default useStyles;
