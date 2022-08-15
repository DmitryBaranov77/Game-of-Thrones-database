import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import GotService from "../../services/getService";
import './charCard.css'

export default class CharCard extends React.Component{
	gotService = new GotService();

	state ={
		char: null
	};

	componentDidMount() {
		this.updateCharacter();
	};

	updateCharacter() {
		const {charId} = this.props;
		if(!charId) return;

		this.gotService.getCharacter(charId)
			.then(char => {
				this.setState({char})
			})
	};

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId){
			this.updateCharacter();
		}
	}


	render() {
		if(!this.state.char) return <span>Please select a character</span>

		const {name, gender, born, died, culture} = this.state.char;

		return (
			<div className="rounded card-block">
				<h4>{name ? name : 'no data('}</h4>
				<ListGroup as="ul" variant="flush">
					<ListGroupItem as="li">
						<span className="term">Gender</span>
						<span>{gender ? gender : 'no data('}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Born</span>
						<span>{born ? born : 'no data('}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Died</span>
						<span>{died ? died : 'no data('}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Culture</span>
						<span>{culture ? culture : 'no data('}</span>
					</ListGroupItem>
				</ListGroup>
			</div>
		)
	}
}

