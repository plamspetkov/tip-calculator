import React from 'react';
import Input from '../Input/Input';
import InfoRow from '../InfoRow/InfoRow';
import Section from '../UI/Section';

const TipCalculation = (props) => {
	const amountHandler = (e) => {
		props.onEnteredAmount(e.target.value);
	};

	const tipHandler = (e) => {
		props.onEnteredTip(e.target.value);
	};

	return (
		<Section>
			<Input
				type="number"
				name="Bill"
				id="yourBill"
				placeholder="Your bill"
				onChange={amountHandler}
			/>
			<Input
				type="range"
				name="Select Tip"
				id="tipInput"
				min="0"
				max="100"
				printValue={`${props.tipValue}%`}
				value={props.tipValue}
				// step="1"
				onChange={tipHandler}
			/>
			<InfoRow name="Tip" printValue={props.tipPercent} />
			<InfoRow name="Total" printValue={props.totalBill} />
		</Section>
	);
};

export default TipCalculation;
