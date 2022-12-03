import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import InfoRow from '../InfoRow/InfoRow';
import Section from '../UI/Section';

const TipCalculation = () => {
	const [enteredAmount, setEnteredAmount] = useState('');
	const [tip, setTip] = useState(0);
	const [tipPercent, setTipPercent] = useState(0);
	const [total, setTotal] = useState(0);

	const onChangedAmountHandler = (e) => {
		setEnteredAmount(+e.target.value);
	};

	const onChangeTipHandler = (e) => {
		setTip(e.target.value);
	};

	useEffect(() => {
		const setPercent = (enteredAmount * tip) / 100;
		setTipPercent(setPercent.toFixed(2));
		const totalSum = enteredAmount + tipPercent;
		setTotal(totalSum);
	}, [enteredAmount, tip, tipPercent]);

	return (
		<Section>
			<Input
				type="number"
				name="Bill"
				min="0"
				max="100"
				id="yourBill"
				value={enteredAmount}
				placeholder="Your bill"
				onChange={onChangedAmountHandler}
			/>
			<Input
				type="range"
				name="Select Tip"
				id="tipInput"
				printValue={`${tip}%`}
				value={tip}
				// step="1"
				onChange={onChangeTipHandler}
			/>
			<InfoRow name="Tip" printValue={tipPercent} />
			<InfoRow name="Total" printValue={total} />
		</Section>
	);
};

export default TipCalculation;
