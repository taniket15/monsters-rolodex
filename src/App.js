import { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((res) => this.setState(() => ({ ...this.state, monsters: res })));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<input
					type="search"
					placeholder="search monsters"
					value={searchField}
					onChange={(e) => {
						this.setState(() => ({
							...this.state,
							searchField: e.target.value,
						}));
					}}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
