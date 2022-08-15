import React from "react";
import { Row, Col } from "react-bootstrap";
import CharCard from "../charCard/charCard";
import CharList from "../chaList";
import ErrorMessage from "../errorMessage/errorMessage";

export default class CharacterPage extends React.Component {
	state = {
		selectedChar: 130,
		error: false
	}

	componentDidCatch() {
		this.setState({error: true})
	}

	onCharSelected = (id) => {
		this.setState({selectedChar: id});
	};

	render() {
		if(this.state.error) return <ErrorMessage/>
		return (
			<Row>
				<Col lg='6'><CharList onCharSelected={this.onCharSelected}/></Col>
				<Col lg='6'><CharCard charId={this.state.selectedChar}/></Col>
			</Row>
		)
	}
}