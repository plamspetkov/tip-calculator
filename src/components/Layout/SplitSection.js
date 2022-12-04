import React from 'react';
import InfoRow from '../InfoRow/InfoRow';
import Input from '../Input/Input';
import Section from '../UI/Section';

const SplitSection = (props) => {
	const peopleHAndler = (e) => {
		props.onEnteredPeople(e.target.value);
	};

	let people;
	if (props.peopleValue < 2) {
		people = `${props.peopleValue} person`;
	} else {
		people = `${props.peopleValue} people`;
	}

	return (
		<Section>
			<Input
				type="range"
				name="Split"
				min="1"
				max="10"
				value={props.peopleValue}
				id="splitInput"
				printValue={people}
				onChange={peopleHAndler}
			/>
			<InfoRow name="Bill Each" printValue={props.perBill} />
			<InfoRow name="Tip Each" printValue={props.perTip} />
		</Section>
	);
};

export default SplitSection;
