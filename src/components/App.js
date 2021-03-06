import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { gifts: [] };
	}

	addGift = () => {
		const { gifts } = this.state;
		const ids = gifts.map(gift => gift.id);
		const maxId = max_number(ids);
		gifts.push({ id: maxId + 1 });
		this.setState({ gifts });
	};

	removeGift = (id) => {
		const { gifts } = this.state;
		this.setState({ gifts: gifts.filter(gift => gift.id !== id) });
	};

	render() {
		return (
			<div>
				<h2>Gift Giver</h2>
				<div className="gift-list">
					{
						this.state.gifts.map(gift => {
							return (
								<Gift
									key={ gift.id }
									gift={ gift }
									removeGift={ this.removeGift }
								/>
							);
						})
					}
				</div>
				<Button className="btn-add" onClick={ this.addGift }>Add Gift</Button>
			</div>
		);
	}
}

export default App;