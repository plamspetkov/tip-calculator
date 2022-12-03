import React, { Fragment } from 'react';
import classes from './Input.module.css';

const Input = (props) => {
	return (
		<fieldset
			className={props.type === 'range' ? classes.range : classes.input}
		>
			<div>
				<label htmlFor={props.id}>{props.name}</label>
				<span>{props.printValue}</span>
			</div>
			<input
				type={props.type}
				placeholder={props.placeholder}
				min={props.min}
				max={props.max}
				value={props.value}
				step={props.step}
				id={props.id}
				onChange={props.onChange}
			/>
		</fieldset>
	);
};

export default Input;
