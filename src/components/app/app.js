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
					<Col sm={{span: 5, offset: 0}}><RandomChar/></Col>
				</Row>
				<Row>
					<Col sm='6'><CharList/></Col>
					<Col sm='6'><CharCard/></Col>
				</Row>
			</Container>
		</>
	)
}

export default App;