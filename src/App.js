import './App.css';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			attractions: [],
			attractionsListTwo: [],
			isLoaded: false,
		};
	}
	componentDidMount() {
		fetch('https://touringplans.com/magic-kingdom/attractions.json')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					attractions: json,
				});
			});
	}

	addActivity = (e, index) => {
		this.state.attractionsListTwo.push(e);
		this.state.attractions.splice(index,index + 1)
		this.forceUpdate();
	};

	render() {
		const { attractions, isLoaded, attractionsListTwo } = this.state;
		if (!isLoaded) {
			return <div>Loading ...</div>;
		} else {
			return (
				<div>
					{attractions.map((attraction, index) => (
						<p onClick={(e) => this.addActivity(attraction, index)} key={index}>
							{attraction.name}
						</p>
					))}
					<div>
						{attractionsListTwo.map((wantToDo, index) => (
							<p key={index}>{wantToDo.name}</p>
						))}
					</div>
				</div>
			);
		}
	}
}

export default App;
