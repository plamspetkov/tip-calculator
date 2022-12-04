import { Fragment } from 'react';
import Wrapper from './components/Layout/Wrapper';
import classes from './App.module.css';

function App() {
	return (
		<Fragment>
			<Wrapper />
			<p className={classes.p}>
				Made by <a href="https://plamspetkov.com/fd/">Plamen Petkov</a>
			</p>
		</Fragment>
	);
}

export default App;
