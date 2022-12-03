import React from 'react';
import Card from '../UI/Card';
import SplitSection from './SplitSection';
import TipCalculation from './TipCalculation';
import classes from './Wrapper.module.css';

const Wrapper = (props) => {
	return (
		<Card className={classes.wrap}>
			<h1>Tip Calculator</h1>
			<TipCalculation />
			<SplitSection />
		</Card>
	);
};

export default Wrapper;
