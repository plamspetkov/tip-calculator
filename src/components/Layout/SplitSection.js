import React from 'react';
import InfoRow from '../InfoRow/InfoRow';
import Input from '../Input/Input';
import Section from '../UI/Section';

const SplitSection = () => {
	return (
		<Section>
			<Input
				type="range"
				name="Split"
				min="1"
				max="10"
				id="splitInput"
				printValue="1 person"
			/>
			<InfoRow name="Bill Each" printValue="25" />
			<InfoRow name="Tip Each" printValue="25" />
		</Section>
	);
};

export default SplitSection;
