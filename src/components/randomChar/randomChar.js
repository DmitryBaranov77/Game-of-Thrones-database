import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import GotService from "../../services/getService";
import Spinner from "react-bootstrap/esm/Spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import './randomChar.css'

export default class RandomChar extends React.Component{

	constructor() {
		super();
		this.updateCharacter();
	}

	gotService = new GotService();
	state = {
		char: {},
		loading: true,
		error: false
	}

	onCharLoaded = (char) => {
		this.setState({
			char, 
			loading: false
		})
	}

	onError = (error) =>{
		this.setState({
			error: true,
			loading: false
		})
	}

	updateCharacter = () => {
		// const id = Math.floor(Math.random()*140 + 25);
		const id = 1231231231;
		this.gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		const {char, loading, error} = this.state;
		const errorMessage = error ? <ErrorMessage/> : null;
		const spinner = loading ? <div className="spinner"><Spinner as='h4' animation="grow" variant="dark" /></div> : null;
		const content = !(loading || error) ? <View char={char}/> : null;

		return (
			<div className="rounded random-block">
				{errorMessage}
				{spinner}
				{content}
			</div>
		)
	}
}

const View = ({char}) => {
	const {name, gender, born, died, culture} = char;
	return (
		<>
			<h4>Random Character: {name}</h4>
				<ListGroup as="ul" variant="flush">
					<ListGroupItem as="li">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Born</span>
						<span>{born}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Died</span>
						<span>{died}</span>
					</ListGroupItem>
					<ListGroupItem as="li">
						<span className="term">Culture</span>
						<span>{culture}</span>
					</ListGroupItem>
				</ListGroup>
		</>
	)
}
