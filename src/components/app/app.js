import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../characterPage/characterPage";
import './app.css'


export default class App extends React.Component {

	state = {
		showRandom: true,
		error: false
	};

	componentDidCatch() {
		console.log('error');
		this.setState({error: true});
	}

	toggleRandomChar = () =>{
		this.setState({showRandom: !this.state.showRandom});
	};

	render() {
		const {showRandom, error} = this.state;
		const randomChar = showRandom ? <RandomChar/> : null;
		if(error) return <ErrorMessage/>;

		return (
			<>
				<Container>
					<Header/>
				</Container>
				<Container>
					<Row>
						<Col lg='6'>
							{randomChar}
							<Button className="toggle-button" variant="dark" onClick={this.toggleRandomChar}>Toggle random character block</Button>
						</Col>
					</Row>
					<CharacterPage/>
				</Container>
			</>
		)
	}
}