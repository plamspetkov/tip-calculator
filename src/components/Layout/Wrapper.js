import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import SplitSection from './SplitSection';
import TipCalculation from './TipCalculation';
import classes from './Wrapper.module.css';

const Wrapper = () => {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [tip, setTip] = useState(0);
	const [tipPercent, setTipPercent] = useState(0);
	const [total, setTotal] = useState(0);

	const [peopleCount, setPeopleCount] = useState(1);
	const [billEach, setBillEach] = useState(0);
	const [tipEach, settipEach] = useState(0);

	const onChangeCountHandler = (value) => {
		setPeopleCount(value);
	};

	const onChangedAmountHandler = (value) => {
		setEnteredAmount(value);
	};

	const onChangeTipHandler = (value) => {
		setTip(value);
	};

	useEffect(() => {
		const setPercent = Number((enteredAmount * tip) / 100);
		setTipPercent(setPercent.toFixed(2));
		const totalSum = Number(enteredAmount) + Number(tipPercent);
		setTotal(totalSum.toFixed(2));
		const divideBill = totalSum / peopleCount;
		setBillEach(divideBill.toFixed(2));
		const divideTip = tipPercent / peopleCount;
		settipEach(divideTip.toFixed(2));
		console.log(totalSum / peopleCount);
		console.log(typeof divideBill);
	}, [enteredAmount, tip, tipPercent, total, peopleCount]);

	return (
		<Card className={classes.wrap}>
			<h1>Tip Calculator</h1>
			<TipCalculation
				onEnteredAmount={onChangedAmountHandler}
				onEnteredTip={onChangeTipHandler}
				tipValue={tip}
				tipPercent={tipPercent}
				totalBill={total}
			/>
			<SplitSection
				onEnteredPeople={onChangeCountHandler}
				peopleValue={peopleCount}
				perBill={billEach}
				perTip={tipEach}
			/>
		</Card>
	);
};

export default Wrapper;
