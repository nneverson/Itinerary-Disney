import '../App.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

class List extends React.Component {
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
		this.state.attractions.splice(index, 1);
		fetch(
			`https://touringplans.com/magic-kingdom/attractions/${e.name
				.toLowerCase()
				.replaceAll(' ', '-')}.json`
		)
			.then((res) => res.json())
			.then((json) => {
				e.when_to_go = json.when_to_go || 'no recommended time';
				console.log(json);
				this.forceUpdate();
			})
			.catch(() => {e.when_to_go = 'no recommended time'; this.forceUpdate()})
		

		this.forceUpdate();
	};
	reset = (e) => {
		this.setState({ attractionsListTwo: [] });
		fetch('https://touringplans.com/magic-kingdom/attractions.json')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					attractions: json,
				});
			});
	};
	delete = (e, index) => {
		this.state.attractionsListTwo.splice(index, 1);
		this.state.attractions.unshift(e);
		this.forceUpdate();
	};
	strikeThrough = (e) => {
		const element = e.target;
		element.classList.toggle('crossed-line');
	};

	render() {
		const { attractions, isLoaded, attractionsListTwo } = this.state;
		const inlineStyle = {
			width: '100%',
			height: '100%',
		};
		if (!isLoaded) {
			return (
				<div className='ui segment' style={inlineStyle}>
					<p>Loading</p>
					<div className='ui active dimmer'>
						<div className='ui large loader'></div>
					</div>
				</div>
			);
		} else {
			return (
				<div className='parent'>
					<div className='left'>
						{attractions.map((attraction, index) => (
							<p
								onClick={(e) => this.addActivity(attraction, index)}
								key={index}>
								{attraction.name}
							</p>
						))}
					</div>
					<div className='right'>
						<button onClick={(e) => this.reset()} className='user-list-button'>
							Reset
						</button>
						{attractionsListTwo.map((wantToDo, index) => (
							<div key={index} style={{ margin: '20px' }}>
								<i
									className='trash alternate outline icon'
									onClick={(e) => this.delete(wantToDo, index)}></i>
								<p style={{ display: 'inline' }} onClick={this.strikeThrough}>
									{wantToDo.name}
								</p>
								<i
									className={
										'angle' +
										' ' +
										(wantToDo.expand ? 'up' : 'down') +
										' ' +
										'icon'
									}
									onClick={() => {
										wantToDo.expand = !wantToDo.expand;
										this.forceUpdate();
									}}></i>

								<p className={wantToDo.expand ? 'expand' : 'collapse'}>
									{wantToDo.when_to_go}
								</p>
							</div>
						))}
					</div>
				</div>
			);
		}
	}
}

export default withRouter(List);
