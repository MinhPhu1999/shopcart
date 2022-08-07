import { memo } from 'react';

import './styles.css';

function MessageBox(props) {
	return (
		<div className={`alert alert-${props.variant || 'info'}`}>
			{props.children}
		</div>
	);
}

export default memo(MessageBox);
