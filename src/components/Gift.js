import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

class Gift extends Component {
	constructor(props) {
		super(props);

		this.state = { person: '', present: '' };
	}

	updateGiftEntity = (key, value) => {
		this.setState({ [key]: value });
	};

	render() {
		return <div>
			<Form>
				<FormGroup>
					<FormLabel>Person</FormLabel>
					<FormControl
						onChange={ event => this.updateGiftEntity('person', event.target.value) }
						className="input-person"
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel>Present</FormLabel>
					<FormControl
						onChange={ event => this.updateGiftEntity('present', event.target.value) }
						className="input-present"
					/>
				</FormGroup>
			</Form>
		</div>;
	}
}

export default Gift;