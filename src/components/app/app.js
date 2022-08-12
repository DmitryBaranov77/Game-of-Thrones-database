import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharList from "../chaList";
import CharCard from "../charCard/charCard";
import './app.css'


export default class App extends React.Component {

	state = {
		showRandom: true
	}

	toggleRandomChar = () =>{
		this.setState({showRandom: !this.state.showRandom});
	}

	render() {
		const {showRandom} = this.state;
		const randomChar = showRandom ? <RandomChar/> : null;

		return (
			<>
				<Container>
					<Header/>
				</Container>
				<Container>
					<Row>
						<Col lg='6'>
							{randomChar}
							<Button variant="dark" onClick={this.toggleRandomChar}>Toggle random character block</Button>
						</Col>
					</Row>
					<Row>
						<Col lg='6'><CharList/></Col>
						<Col lg='6'><CharCard/></Col>
					</Row>
				</Container>
			</>
		)
	}
}