import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharList from "../chaList";
import CharCard from "../charCard/charCard";


const App = () => {
	return (
		<>
			<Container>
				<Header/>
			</Container>
			<Container>
				<Row>
					<Col lg='6'><RandomChar/></Col>
				</Row>
				<Row>
					<Col lg='6'><CharList/></Col>
					<Col lg='6'><CharCard/></Col>
				</Row>
			</Container>
		</>
	)
}

export default App;