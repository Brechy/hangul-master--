import React from 'react';
import '../../../node_modules/bulma/bulma.sass';

const CardForm = () => {
	return (
		<div className="field">
			<div className="control">
				<input
					className="input is-primary"
					type="text"
					placeholder="Primary input"
				/>
			</div>
		</div>
	);
};

export default CardForm;
