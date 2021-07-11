import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
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
}));

export default useStyles;
