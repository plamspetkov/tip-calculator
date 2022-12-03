import React from 'react';
import classes from './InfoRow.module.css';

const InfoRow = (props) => {
	return (
		<div className={classes.infoRow}>
			<span>{props.name}</span>
			<span>{props.printValue}</span>
		</div>
	);
};

export default InfoRow;
