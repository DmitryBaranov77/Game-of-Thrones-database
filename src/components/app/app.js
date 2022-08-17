import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage/errorMessage";
import { CharacterPage, BoooksPage, HousesPage } from "../pages";
import './app.css';
import GotService from "../../services/getService";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default class App extends React.Component {
	gotService = new GotService();

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
			<Router>
				<div className="app">
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
						<Routes>
							<Route path='/' element={<h1>Welcome to GOT DB</h1>}/>
							<Route path="characters" element={<CharacterPage/>} />
							<Route path="houses" element={<HousesPage/>} />
							<Route path="books" element={<BoooksPage/>} />
						</Routes>
					</Container>
				</div>
			</Router>
		)
	}
}